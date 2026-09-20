#!/usr/bin/env python3
"""Add `{: width="W" height="H"}` attribute lists to Markdown image references.

Reads the real pixel dimensions out of each image's file header (no third-party
dependency: PNG IHDR, GIF logical screen descriptor, JPEG SOF, and WebP VP8/VP8L/VP8X
containers are all parsed by hand) and rewrites the matching Markdown references in
place.

Only references whose target exists on disk and that have no attribute list yet are
touched, so the script is idempotent and safe to re-run.

Usage:
    python script/add_image_dimensions.py [--dry-run] [--check] [path ...]

    --dry-run  Show what would change without writing.
    --check    Report references that would not be rewritten and exit non-zero
               if any were found (useful in CI).
"""

from __future__ import annotations

import argparse
import re
import struct
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

# Markdown image: ![alt](target) and ![alt](<target>) are both accepted.
# A trailing attribute list on the same line is captured so we can skip it.
IMAGE_RE = re.compile(
    r"""!\[(?P<alt>[^\]]*)\]\((?P<open><)?(?P<target>[^)\s>]+)(?P<close>>)?\)"""
    r"""(?P<attrs>\{[^}]*\})?"""
)

MARKDOWN_GLOB = "**/*.md"


# --------------------------------------------------------------------------- #
# Image header parsing
# --------------------------------------------------------------------------- #

def _dimensions_png(data: bytes) -> tuple[int, int]:
    # 8-byte signature, then the IHDR chunk: 4-byte length, "IHDR",
    # then width and height as big-endian uint32.
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError("not a PNG")
    if data[12:16] != b"IHDR":
        raise ValueError("PNG IHDR not found")
    width, height = struct.unpack(">II", data[16:24])
    return width, height


def _dimensions_gif(data: bytes) -> tuple[int, int]:
    if data[:6] not in (b"GIF87a", b"GIF89a"):
        raise ValueError("not a GIF")
    # Logical screen descriptor: width and height as little-endian uint16.
    width, height = struct.unpack("<HH", data[6:10])
    return width, height


def _dimensions_jpeg(data: bytes) -> tuple[int, int]:
    if data[:2] != b"\xff\xd8":
        raise ValueError("not a JPEG")
    offset = 2
    length = len(data)
    # Walk the marker segments looking for a Start-Of-Frame marker, which is
    # where the true image dimensions live.
    sof_markers = {
        0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7,
        0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF,
    }
    while offset < length - 1:
        # Segments are introduced by 0xFF; padding bytes may also be 0xFF.
        if data[offset] != 0xFF:
            offset += 1
            continue
        marker = data[offset + 1]
        offset += 2
        # Standalone markers carry no payload.
        if marker in (0xD8, 0x01) or 0xD0 <= marker <= 0xD7:
            continue
        if marker == 0xD9 or offset + 2 > length:
            break
        seg_len = struct.unpack(">H", data[offset : offset + 2])[0]
        if marker in sof_markers:
            # SOF payload: precision (1), height (2), width (2), ...
            if offset + 7 > length:
                break
            height, width = struct.unpack(">HH", data[offset + 3 : offset + 7])
            return width, height
        offset += seg_len
    raise ValueError("JPEG SOF marker not found")


def _dimensions_webp(data: bytes) -> tuple[int, int]:
    if data[:4] != b"RIFF" or data[8:12] != b"WEBP":
        raise ValueError("not a WebP")
    chunk = data[12:16]

    if chunk == b"VP8X":
        # Extended format: canvas width-1 / height-1 as 24-bit little-endian.
        width = int.from_bytes(data[24:27], "little") + 1
        height = int.from_bytes(data[27:30], "little") + 1
        return width, height

    if chunk == b"VP8 ":
        # Lossy: dimensions sit after the 3-byte start code and 0x9d012a sync.
        if data[23:26] != b"\x9d\x01\x2a":
            raise ValueError("bad VP8 sync code")
        width = int.from_bytes(data[26:28], "little") & 0x3FFF
        height = int.from_bytes(data[28:30], "little") & 0x3FFF
        return width, height

    if chunk == b"VP8L":
        # Lossless: 14 bits of width-1 then 14 bits of height-1, packed
        # little-endian after the 0x2f signature byte.
        if data[20] != 0x2F:
            raise ValueError("bad VP8L signature")
        bits = int.from_bytes(data[21:25], "little")
        width = (bits & 0x3FFF) + 1
        height = ((bits >> 14) & 0x3FFF) + 1
        return width, height

    raise ValueError(f"unsupported WebP chunk {chunk!r}")


PARSERS = {
    ".png": _dimensions_png,
    ".gif": _dimensions_gif,
    ".jpg": _dimensions_jpeg,
    ".jpeg": _dimensions_jpeg,
    ".webp": _dimensions_webp,
}

# Some files in this repo carry a misleading extension (e.g. PNG-named files
# that are actually JPEG), so snap to the format from the magic bytes and only
# fall back to the extension when the signature is not recognised.
MAGIC_PARSERS: list[tuple[bytes, object]] = [
    (b"\x89PNG\r\n\x1a\n", _dimensions_png),
    (b"GIF87a", _dimensions_gif),
    (b"GIF89a", _dimensions_gif),
    (b"\xff\xd8", _dimensions_jpeg),
]

WEBP_SIGNATURE = (b"RIFF", b"WEBP")


def image_dimensions(path: Path) -> tuple[int, int] | None:
    """Return (width, height) in pixels, or None if the format is unsupported."""
    # Header parsing never needs the whole file; 64 KiB covers every format here.
    with path.open("rb") as fh:
        data = fh.read(65536)

    parsers = []
    for signature, parser in MAGIC_PARSERS:
        if data.startswith(signature):
            parsers.append(parser)
            break
    else:
        if data[:4] == WEBP_SIGNATURE[0] and data[8:12] == WEBP_SIGNATURE[1]:
            parsers.append(_dimensions_webp)

    # The extension is only a hint; keep it as a last resort for formats whose
    # signature we do not recognise.
    ext_parser = PARSERS.get(path.suffix.lower())
    if ext_parser is not None and ext_parser not in parsers:
        parsers.append(ext_parser)

    for parser in parsers:
        try:
            width, height = parser(data)
        except (ValueError, struct.error):
            continue
        if width > 0 and height > 0:
            return width, height
    return None


# --------------------------------------------------------------------------- #
# Rewriting
# --------------------------------------------------------------------------- #

def resolve_target(target: str) -> Path | None:
    """Map a Markdown image target to a file in the repo, or None."""
    if target.startswith(("http://", "https://", "//", "data:")):
        return None
    # Strip any query/fragment, then anchor site-absolute paths at the repo root.
    clean = target.split("#", 1)[0].split("?", 1)[0]
    if clean.startswith("/"):
        return REPO_ROOT / clean.lstrip("/")
    return None


def rewrite_file(path: Path, dims_cache: dict[str, tuple[int, int] | None],
                 dry_run: bool) -> tuple[int, list[str]]:
    """Rewrite image references in one file. Returns (changed_count, problems)."""
    text = path.read_text(encoding="utf-8")
    problems: list[str] = []
    changed = 0

    def replace(match: re.Match[str]) -> str:
        nonlocal changed

        # Already has an attribute list: leave it alone.
        if match.group("attrs"):
            return match.group(0)

        target = match.group("target")
        resolved = resolve_target(target)
        if resolved is None:
            return match.group(0)

        key = str(resolved)
        if key not in dims_cache:
            dims_cache[key] = image_dimensions(resolved) if resolved.is_file() else None
        dims = dims_cache[key]

        if dims is None:
            # Unresolvable, missing, or unsupported format.
            if target.startswith("/"):
                problems.append(f"{path}: no dimensions for {target}")
            return match.group(0)

        width, height = dims
        changed += 1

        # Preserve the angle-bracket form when the target used it.
        open_br = match.group("open") or ""
        close_br = match.group("close") or ""
        return (
            f"![{match.group('alt')}]({open_br}{target}{close_br})"
            f'{{: width="{width}" height="{height}"}}'
        )

    new_text = IMAGE_RE.sub(replace, text)

    if changed and not dry_run:
        path.write_text(new_text, encoding="utf-8")

    return changed, problems


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true",
                        help="report changes without writing")
    parser.add_argument("--check", action="store_true",
                        help="exit non-zero if any reference lacks dimensions")
    parser.add_argument("paths", nargs="*",
                        help="files or directories (default: whole repo)")
    args = parser.parse_args()

    if args.paths:
        files: list[Path] = []
        for raw in args.paths:
            p = Path(raw)
            if p.is_dir():
                files.extend(sorted(p.glob(MARKDOWN_GLOB)))
            elif p.is_file():
                files.append(p)
    else:
        files = sorted(
            p for p in REPO_ROOT.glob(MARKDOWN_GLOB)
            if "_site" not in p.parts and ".git" not in p.parts
        )

    dims_cache: dict[str, tuple[int, int] | None] = {}
    total_changed = 0
    all_problems: list[str] = []

    for path in files:
        changed, problems = rewrite_file(path, dims_cache, args.dry_run)
        if changed:
            total_changed += changed
            rel = path.relative_to(REPO_ROOT)
            print(f"{'[dry-run] ' if args.dry_run else ''}"
                  f"{rel}: {changed} image(s)")
        all_problems.extend(problems)

    print(f"\nScanned {len(files)} Markdown file(s).")
    print(f"{'Would update' if args.dry_run else 'Updated'} "
          f"{total_changed} image reference(s).")

    if all_problems:
        print(f"\n{len(all_problems)} reference(s) left untouched:")
        for line in all_problems[:50]:
            print(f"  {line}")
        if len(all_problems) > 50:
            print(f"  ... and {len(all_problems) - 50} more")

    if args.check and (total_changed or all_problems):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
