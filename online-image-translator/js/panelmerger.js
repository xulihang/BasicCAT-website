// Panel-aware text merging for comics.
// Port of PanelMerger (ImageTrans-Android). Recognized lines are first
// grouped into panels (speech balloons or paragraphs) by alignment and
// proximity, and only lines of one panel are merged together. When the
// detector supplies balloons (the manga model's class 5), those are the
// panels instead. Neighbouring balloons thus stay separate blocks, which
// matters for Western comics with many small balloons per page.
//
// Inside a panel, horizontal text merges left to right first (fragments on
// one line) and then top to bottom (lines into paragraphs); vertical text
// merges top to bottom first (fragments of a column) and then right to
// left (columns). The blocks follow the reading order of the lines.

const PanelMerger = (function() {
  'use strict';

  const DEFAULT_X_GAP = 15;
  const DEFAULT_Y_GAP = 15;

  // Share of a line that must lie in a column for the line to be part of it.
  const MIN_COLUMN_OVERLAP = 0.5;

  // Rows must overlap this share to be one line.
  const SAME_LINE_OVERLAP = 0.6;
  // A row overlapping this share of the row above continues its block.
  const CONTINUE_OVERLAP = 0.5;
  // A line this many times taller than wide is vertical text.
  const TALL_RATIO = 1.5;

  // Panels estimated from the lines (see experiments/balloon_clustering in
  // the Android project).
  const COLUMN_ROW = 8;        // vertical text: tops within this are one row
  const COLUMN_SIDE = 70;      // vertical text: columns of one balloon this far apart
  const COLUMN_EDGE = 8;       // vertical text: one column's right edges this close
  const COLUMN_BELOW = 40;     // vertical text: stacked lines this far apart
  const LINE_EDGE = 0.3;       // horizontal text: edges within this share of the height
  const LINE_GAP_HEIGHTS = 1.6;
  const LINE_PITCH = 1.7;

  // Languages without spaces between words (Korean keeps them).
  function containsCjk(text) {
    if (!text) return false;
    for (let i = 0; i < text.length; i++) {
      const ch = text.charCodeAt(i);
      if ((ch >= 0x4E00 && ch <= 0x9FFF)
          || (ch >= 0x3400 && ch <= 0x4DBF)
          || (ch >= 0x3040 && ch <= 0x30FF)
          || (ch >= 0x3000 && ch <= 0x303F)
          || (ch >= 0xFF00 && ch <= 0xFFEF)) {
        return true;
      }
    }
    return false;
  }

  const RTL_LANGUAGES = ['ar', 'fa', 'he', 'ur', 'ps', 'sd', 'ug', 'yi', 'dv', 'ckb', 'prs', 'skr', 'bal'];

  function isRTLLanguage(lang) {
    if (!lang) return false;
    return RTL_LANGUAGES.indexOf(String(lang).toLowerCase().split(/[-_]/)[0]) !== -1;
  }

  // ==================== Geometry ====================

  function right(box) { return box.left + box.width; }
  function bottom(box) { return box.top + box.height; }
  function centerX(box) { return box.left + box.width / 2; }
  function centerY(box) { return box.top + box.height / 2; }

  function bounds(row) {
    let left = row[0].left;
    let top = row[0].top;
    let rightEdge = right(row[0]);
    let bottomEdge = bottom(row[0]);
    for (let i = 1; i < row.length; i++) {
      const box = row[i];
      left = Math.min(left, box.left);
      top = Math.min(top, box.top);
      rightEdge = Math.max(rightEdge, right(box));
      bottomEdge = Math.max(bottomEdge, bottom(box));
    }
    return { left: left, top: top, width: rightEdge - left, height: bottomEdge - top, text: '' };
  }

  function rowLeft(row) { return bounds(row).left; }
  function rowRight(row) { return right(bounds(row)); }
  function rowTop(row) { return bounds(row).top; }

  function widthOf(row) { return rowRight(row) - rowLeft(row); }
  function heightOf(row) { return bottom(bounds(row)) - rowTop(row); }

  // Share of the narrower row that lies above (or below) the other.
  function horizontalOverlap(above, below) {
    const overlap = Math.min(rowRight(above), rowRight(below)) - Math.max(rowLeft(above), rowLeft(below));
    const narrower = Math.min(widthOf(above), widthOf(below));
    return narrower <= 0 ? 0 : Math.max(0, overlap) / narrower;
  }

  // Share of the narrower column that lies beside the other.
  function columnOverlap(left, rightRow) {
    const overlap = Math.min(bottom(bounds(left)), bottom(bounds(rightRow)))
      - Math.max(rowTop(left), rowTop(rightRow));
    const shorter = Math.min(heightOf(left), heightOf(rightRow));
    return shorter <= 0 ? 0 : Math.max(0, overlap) / shorter;
  }

  function xCloseEnough(a, b, xGap) {
    if (right(a) < b.left) return b.left - right(a) <= xGap;
    if (right(b) < a.left) return a.left - right(b) <= xGap;
    return true;
  }

  function yCloseEnough(a, b, yGap) {
    if (bottom(a) < b.top) return b.top - bottom(a) <= yGap;
    if (bottom(b) < a.top) return a.top - bottom(b) <= yGap;
    return true;
  }

  // Whether two boxes are side by side on one line (horizontal text).
  function sameLine(a, b, vertical, xGap, yGap) {
    if (vertical) {
      return oneBelow(a, b, xGap, yGap) || oneBelow(b, a, xGap, yGap);
    }
    const smaller = Math.min(Math.abs(a.height), Math.abs(b.height));
    const overlap = Math.min(bottom(a), bottom(b)) - Math.max(a.top, b.top);
    return smaller > 0 && overlap >= SAME_LINE_OVERLAP * smaller && sideBySide(a, b, xGap);
  }

  // Whether a box stands between two pieces of one line.
  function sideBySide(a, b, xGap) {
    const gap = Math.max(0, Math.max(a.left, b.left) - Math.min(right(a), right(b)));
    return gap <= xGap;
  }

  // Whether `below` comes after `above` in its column.
  function oneBelow(below, above, xGap, yGap) {
    const narrower = Math.min(Math.abs(below.width), Math.abs(above.width));
    const overlap = Math.min(right(below), right(above)) - Math.max(below.left, above.left);
    return narrower > 0 && overlap / narrower >= 0.5
      && yCloseEnough(above, below, yGap) && xCloseEnough(above, below, xGap);
  }

  // Whether two areas are on one row: their heights overlap by half.
  function sameRow(a, b) {
    const overlap = Math.min(bottom(a), bottom(b)) - Math.max(a.top, b.top);
    const shorter = Math.min(Math.abs(a.height), Math.abs(b.height));
    return shorter > 0 && overlap >= 0.5 * shorter;
  }

  function united(a, b) {
    const left = Math.min(a.left, b.left);
    const top = Math.min(a.top, b.top);
    const rightEdge = Math.max(right(a), right(b));
    const bottomEdge = Math.max(bottom(a), bottom(b));
    return { left: left, top: top, width: rightEdge - left, height: bottomEdge - top, text: '' };
  }

  // ==================== Vertical / horizontal detection ====================

  // Vertical text: most lines are much taller than wide.
  function verticalText(items) {
    let tall = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].height > items[i].width * TALL_RATIO) tall++;
    }
    return tall * 2 > items.length;
  }

  // Whether the lines are already in reading order: each line starts at or
  // below the one before (a few pixels up is still fine), and to its right
  // if it shares the row.
  function inReadingOrder(lines) {
    if (lines.length < 3) return true;
    for (let i = 1; i < lines.length; i++) {
      const before = lines[i - 1];
      const after = lines[i];
      const row = Math.min(Math.abs(before.height), Math.abs(after.height)) * 0.5;
      if (after.top > before.top + row) continue;
      if (after.top < before.top - row) return false;
      if (after.left < before.left) return false;
    }
    return true;
  }

  // ==================== Panels estimated from the lines ====================

  function findRoot(parent, i) {
    while (parent[i] !== i) {
      parent[i] = parent[parent[i]];
      i = parent[i];
    }
    return i;
  }

  function joinSets(parent, a, b) {
    const ra = findRoot(parent, a);
    const rb = findRoot(parent, b);
    if (ra !== rb) parent[ra] = rb;
  }

  // Groups the lines into the panels they belong to (speech balloons or
  // paragraphs) from the lines alone.
  function cluster(lines, vertical) {
    const n = lines.length;
    const parent = new Array(n);
    for (let i = 0; i < n; i++) parent[i] = i;

    if (vertical) {
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (columnsTogether(lines, lines[i], lines[j])) joinSets(parent, i, j);
        }
      }
    } else {
      const p = pitch(lines);
      // The page's alignment: a pair of lines may be set both ways at once
      // (a left-aligned paragraph's lines may also be centred), and it
      // counts for both.
      for (let way = 0; way < 2; way++) {
        const centred = way === 0;
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            if (linesTogether(lines, lines[i], lines[j], centred, p)) joinSets(parent, i, j);
          }
        }
      }
    }

    const labels = new Array(n);
    const ids = new Map();
    for (let i = 0; i < n; i++) {
      const root = findRoot(parent, i);
      let label = ids.get(root);
      if (label === undefined) {
        label = ids.size;
        ids.set(root, label);
      }
      labels[i] = label;
    }
    return labels;
  }

  // --- vertical text: columns, top to bottom, right to left ---

  // Two columns belong to one balloon when the gaps in both directions are
  // small: on one row and close sideways, with no other column between them;
  // or one right below the other in the same column.
  function columnsTogether(lines, a, b) {
    const side = Math.max(a.left, b.left) - Math.min(right(a), right(b));
    const below = Math.max(a.top, b.top) - Math.min(bottom(a), bottom(b));
    if (Math.abs(a.top - b.top) <= COLUMN_ROW && side <= COLUMN_SIDE) {
      const left = a.left <= b.left ? a : b;
      const rightBox = left === a ? b : a;
      if (!columnBetween(lines, left, rightBox)) return true;
    }
    return Math.abs(right(a) - right(b)) <= COLUMN_EDGE && below <= COLUMN_BELOW;
  }

  // Whether another line on their row stands between the two columns.
  function columnBetween(lines, left, rightBox) {
    for (let i = 0; i < lines.length; i++) {
      const other = lines[i];
      if (other === left || other === rightBox) continue;
      if (Math.abs(other.top - left.top) > COLUMN_ROW) continue;
      if (other.left > left.left && right(other) < right(rightBox)) return true;
    }
    return false;
  }

  // --- horizontal text: lines in a paragraph or balloon ---

  // The usual distance between neighboring lines: the most common one among
  // lines of one column (both their left and right edges agree).
  function pitch(lines) {
    const columns = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let column = null;
      for (let c = 0; c < columns.length; c++) {
        if (inColumn(line, columns[c][0], false) || inColumn(line, columns[c][0], true)) {
          column = columns[c];
          break;
        }
      }
      if (column === null) columns.push([line]);
      else column.push(line);
    }

    const diffs = [];
    for (let c = 0; c < columns.length; c++) {
      const tops = columns[c].map(function(line) { return line.top; });
      tops.sort(function(a, b) { return a - b; });
      for (let i = 1; i < tops.length; i++) {
        const diff = tops[i] - tops[i - 1];
        if (diff > 0) diffs.push(Math.round(diff / 2));
      }
    }

    const counts = new Map();
    for (let i = 0; i < diffs.length; i++) {
      counts.set(diffs[i], (counts.get(diffs[i]) || 0) + 1);
    }
    let best = 0;
    let bestCount = 0;
    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const count = counts.get(diff);
      if (count > bestCount || (count === bestCount && (best === 0 || diff < best))) {
        bestCount = count;
        best = diff;
      }
    }
    return best > 0 ? best * 2 : 20;
  }

  // Two lines belong to one balloon when they are set alike, close (no wider
  // than the pitch) and no line of another balloon lies between them.
  function linesTogether(lines, a, b, centred, p) {
    const step = Math.abs(a.top - b.top);
    if (step > LINE_GAP_HEIGHTS * p) return false;
    if (step > LINE_PITCH * p) return false;
    if (!setAlike(a, b, centred)) return false;
    for (let i = 0; i < lines.length; i++) {
      const middle = lines[i];
      if (middle === a || middle === b) continue;
      // Only a line in their own column separates them.
      if (!setAlike(middle, a, centred) && !setAlike(middle, b, centred)) continue;
      if (liesBetween(a, b, middle, p)) return false;
    }
    return true;
  }

  // Whether a line is set like the other: centred, or left-aligned with it
  // or ending where it ends (an indented first line has the same right edge).
  function setAlike(line, other, centred) {
    const edge = LINE_EDGE * Math.max(Math.abs(line.height), Math.abs(other.height));
    return centred
      ? Math.abs(centerX(line) - centerX(other)) <= edge
      : Math.abs(line.left - other.left) <= edge || Math.abs(right(line) - right(other)) <= edge;
  }

  // Whether a line is in the same column as another: both edges agree
  // (centres for centred text).
  function inColumn(line, other, centred) {
    const edge = LINE_EDGE * Math.max(Math.abs(line.height), Math.abs(other.height));
    return centred
      ? Math.abs(centerX(line) - centerX(other)) <= edge
      : Math.abs(line.left - other.left) <= edge && Math.abs(right(line) - right(other)) <= edge;
  }

  // Whether a line of another balloon lies between the two.
  function liesBetween(a, b, middle, p) {
    const top = a.top <= b.top ? a : b;
    const bottomBox = top === a ? b : a;
    if (!(middle.top > top.top + Math.abs(top.height) * 0.5
        && middle.top < bottomBox.top - Math.abs(bottomBox.height) * 0.5)) {
      return false;
    }
    const left = Math.max(a.left, b.left);
    const rightEdge = Math.min(right(a), right(b));
    const shared = rightEdge - left;
    const overlap = Math.min(rightEdge, right(middle)) - Math.max(left, middle.left);
    if (shared > 0 && overlap >= 0.5 * shared) {
      return middle.top - top.top > LINE_PITCH * p;
    }
    const pair = [a, b];
    for (let i = 0; i < pair.length; i++) {
      const line = pair[i];
      const own = Math.min(right(line), right(middle)) - Math.max(line.left, middle.left);
      if (own >= 0.5 * Math.min(line.width, middle.width)) return true;
    }
    return false;
  }

  // ==================== Merging inside a panel ====================

  // Whether `line` is part of the row that `member` is on.
  function isPartOfRow(line, member, vertical, xGap, yGap) {
    if (vertical) {
      // One below the other in the same column.
      const overlap = Math.min(right(line), right(member)) - Math.max(line.left, member.left);
      const narrower = Math.min(Math.abs(line.width), Math.abs(member.width));
      return narrower > 0 && overlap / narrower >= MIN_COLUMN_OVERLAP
        && yCloseEnough(line, member, yGap) && xCloseEnough(line, member, xGap);
    }
    return sameLine(member, line, false, xGap, yGap);
  }

  // The text of a block, line after line.
  function joinText(block, sourceLang) {
    let cjk = false;
    for (let i = 0; i < block.length; i++) cjk = cjk || containsCjk(block[i].text);
    const noSpace = sourceLang === 'zh' || sourceLang === 'ja' || sourceLang === 'th'
      || (cjk && sourceLang !== 'ko');
    const texts = [];
    for (let i = 0; i < block.length; i++) {
      texts.push((block[i].text || '').trim());
    }
    return texts.join(noSpace ? '' : ' ');
  }

  // One panel's lines into text blocks.
  function mergePanel(panel, sourceLang, vertical, rightToLeft, xGap, yGap) {
    // The lines of a panel are grouped row by row, in the order they are
    // stored: line fragments, then the next line.
    const rows = [];
    const used = new Array(panel.length).fill(false);
    for (let i = 0; i < panel.length; i++) {
      if (used[i]) continue;
      const row = [panel[i]];
      used[i] = true;
      for (let j = i; j < panel.length; j++) {
        if (used[j]) continue;
        let part = false;
        for (let k = 0; k < row.length; k++) {
          if (isPartOfRow(panel[j], row[k], vertical, xGap, yGap)) {
            part = true;
            break;
          }
        }
        if (part) {
          row.push(panel[j]);
          used[j] = true;
        }
      }
      row.sort(function(a, b) {
        if (vertical) {
          const byColumn = right(b) - right(a);
          return byColumn !== 0 ? byColumn : a.top - b.top;
        }
        if (rightToLeft) return b.left - a.left;
        return a.left - b.left;
      });
      rows.push(row);
    }

    // The second phase: rows into blocks, in reading order.
    if (!vertical) {
      rows.sort(function(a, b) { return rowTop(a) - rowTop(b); });
    } else {
      rows.sort(function(a, b) {
        const byColumn = rowRight(a) - rowRight(b);
        return byColumn !== 0 ? -byColumn : rowTop(a) - rowTop(b);
      });
    }

    // A row continues the block it overlaps most in its last row, which keeps
    // a column's lines together.
    const groups = [];
    const lastRow = [];
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      let bestStart = -1;
      let bestOverlap = 0;
      for (let g = 0; g < groups.length; g++) {
        const last = lastRow[g];
        const above = groups[g].slice(last[0], last[1]);
        const overlap = vertical ? columnOverlap(above, row) : horizontalOverlap(above, row);
        if (overlap > bestOverlap) {
          bestOverlap = overlap;
          bestStart = g;
        }
      }
      if (bestStart >= 0 && bestOverlap >= CONTINUE_OVERLAP) {
        const group = groups[bestStart];
        const from = group.length;
        for (let i = 0; i < row.length; i++) group.push(row[i]);
        lastRow[bestStart] = [from, group.length];
      } else {
        groups.push(row.slice());
        lastRow.push([0, row.length]);
      }
    }

    return groups.map(function(group) {
      const box = bounds(group);
      box.text = joinText(group, sourceLang);
      return box;
    });
  }

  // Puts blocks in reading order: rows from top to bottom, where two are on
  // one row when their heights overlap by at least half the shorter one; the
  // blocks of a row from the right for vertical or RTL text, from the left
  // otherwise.
  function orderBlocks(blocks, vertical, rightToLeft) {
    if (blocks.length < 2) return;
    const rows = [];
    const rowAreas = [];
    for (let i = 0; i < blocks.length; i++) {
      const block = blocks[i];
      let row = -1;
      for (let r = 0; r < rows.length; r++) {
        if (sameRow(block, rowAreas[r])) {
          row = r;
          break;
        }
      }
      if (row < 0) {
        rows.push([block]);
        rowAreas.push(block);
      } else {
        rows[row].push(block);
        rowAreas[row] = united(rowAreas[row], block);
      }
    }
    const ordered = [];
    for (let r = 0; r < rows.length; r++) {
      rows[r].sort(function(a, b) {
        if (vertical || rightToLeft) return b.left - a.left;
        return a.left - b.left;
      });
      for (let i = 0; i < rows[r].length; i++) ordered.push(rows[r][i]);
    }
    blocks.length = 0;
    for (let i = 0; i < ordered.length; i++) blocks.push(ordered[i]);
  }

  // The lines grouped by panel, each group in the boxes' own order or, for
  // flat coordinate order, down the page and across.
  function partition(lines, labels) {
    const order = lines.slice();
    if (!inReadingOrder(lines)) {
      order.sort(function(a, b) {
        if (Math.abs(a.top - b.top) < Math.min(a.height, b.height) * 0.5) return a.left - b.left;
        return a.top - b.top;
      });
    }
    const labelOf = new Map();
    for (let i = 0; i < lines.length; i++) labelOf.set(lines[i], labels[i]);

    const groups = [];
    for (let i = 0; i < order.length; i++) {
      const label = labelOf.get(order[i]);
      let group = null;
      for (let g = 0; g < groups.length; g++) {
        if (labelOf.get(groups[g][0]) === label) {
          group = groups[g];
          break;
        }
      }
      if (group) group.push(order[i]);
      else groups.push([order[i]]);
    }
    return groups;
  }

  // ==================== Panels given by the detector ====================

  // Slack for a detected balloon's box: half a line may stick out (the text
  // runs to the balloon's edge, and the box has no margin for its outline).
  const AROUND_CENTER = 18;

  function area(box) {
    return Math.abs(box.width * box.height);
  }

  function contains(outer, inner, slack) {
    return inner.left >= outer.left - slack && inner.top >= outer.top - slack
      && right(inner) <= right(outer) + slack && bottom(inner) <= bottom(outer) + slack;
  }

  // The lines grouped by the detected balloons: each line goes to the smallest
  // balloon holding it. The lines outside every balloon (a caption, or a
  // balloon the detector missed) are clustered by proximity as if there were
  // no balloons, and never join the lines of a balloon.
  function partitionDetected(lines, panelRects, vertical) {
    const panels = panelRects.map(function(rect) {
      return { left: rect.left, top: rect.top, width: rect.width, height: rect.height, text: '' };
    });
    const byArea = panels.map(function(panel, index) {
      return { panel: panel, index: index };
    }).sort(function(a, b) {
      return area(a.panel) - area(b.panel);
    });

    const panelOf = new Map();
    for (let i = 0; i < lines.length; i++) {
      for (let j = 0; j < byArea.length; j++) {
        if (contains(byArea[j].panel, lines[i], AROUND_CENTER)) {
          panelOf.set(lines[i], byArea[j].index);
          break;
        }
      }
    }

    const outside = [];
    for (let i = 0; i < lines.length; i++) {
      if (!panelOf.has(lines[i])) outside.push(lines[i]);
    }
    const outsideLabels = outside.length > 0 ? cluster(outside, vertical) : [];
    const outsideIndex = new Map();
    for (let i = 0; i < outside.length; i++) outsideIndex.set(outside[i], i);

    // Inside lines carry their panel's index; outside lines carry a label
    // after the panels' so the two can never group together.
    const labels = lines.map(function(line) {
      if (panelOf.has(line)) return panelOf.get(line);
      return panels.length + outsideLabels[outsideIndex.get(line)];
    });

    const groups = partition(lines, labels);
    const inside = [];
    const outsideGroups = [];
    for (let i = 0; i < groups.length; i++) {
      if (panelOf.has(groups[i][0])) inside.push(groups[i]);
      else outsideGroups.push(groups[i]);
    }
    return inside.concat(outsideGroups);
  }

  // ==================== Entry point ====================

  // items: [{ text, box: [[x, y], ...] }] from PaddleOCR.
  // panelRects: optional balloons [{ left, top, width, height }] from YOLO.
  // Returns merged blocks in the same shape as mergeTextBoxes().
  function merge(items, sourceLang, xSpacing, ySpacing, panelRects) {
    if (!items || items.length === 0) return [];
    const xGap = (xSpacing != null && xSpacing > 0) ? xSpacing : DEFAULT_X_GAP;
    const yGap = (ySpacing != null && ySpacing > 0) ? ySpacing : DEFAULT_Y_GAP;

    const lines = items.map(function(item) {
      const b = item.box;
      const left = Math.min(b[0][0], b[3][0]);
      const top = Math.min(b[0][1], b[1][1]);
      const rightEdge = Math.max(b[1][0], b[2][0]);
      const bottomEdge = Math.max(b[2][1], b[3][1]);
      return {
        left: left,
        top: top,
        width: rightEdge - left,
        height: bottomEdge - top,
        text: item.text || ''
      };
    });

    const vertical = verticalText(lines);
    const rightToLeft = isRTLLanguage(sourceLang);

    const blocks = [];
    const panels = (panelRects && panelRects.length > 0)
      ? partitionDetected(lines, panelRects, vertical)
      : partition(lines, cluster(lines, vertical));
    for (let i = 0; i < panels.length; i++) {
      const ofPanel = mergePanel(panels[i], sourceLang, vertical, rightToLeft, xGap, yGap);
      if (!inReadingOrder(panels[i])) orderBlocks(ofPanel, vertical, rightToLeft);
      for (let j = 0; j < ofPanel.length; j++) blocks.push(ofPanel[j]);
    }
    orderBlocks(blocks, vertical, rightToLeft);

    return blocks.map(function(block) {
      return {
        text: block.text,
        box: [
          [block.left, block.top],
          [block.left + block.width, block.top],
          [block.left + block.width, block.top + block.height],
          [block.left, block.top + block.height]
        ]
      };
    });
  }

  return {
    merge: merge,
    verticalText: verticalText
  };
})();
