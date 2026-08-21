// Canvas Text Rendering Engine
// Ported from Chrome extension's getImage.js
// Handles rendering translated text onto images using Canvas 2D API

const Render = (function() {
  'use strict';

  // ==================== CSS Parser ====================

  function parseFontCSS(cssText) {
    const style = {
      fontFamily: 'sans-serif',
      fontWeight: '',
      fontStyle: '',
      color: '#000000',
      textAlign: 'left',
      textTransform: '',
      backgroundColor: '#FFFFFF',
      borderRadius: { value: 0, unit: 'px' },
      strokeColor: '#FFFFFF',
      strokeWidth: null
    };
    if (!cssText) return style;
    const rules = cssText.split(';').map(function(s) { return s.trim(); }).filter(Boolean);
    for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const colonIdx = rule.indexOf(':');
      if (colonIdx === -1) continue;
      const prop = rule.substring(0, colonIdx).trim().toLowerCase();
      const val = rule.substring(colonIdx + 1).trim();
      switch (prop) {
        case 'font-family': style.fontFamily = val; break;
        case 'font-weight': style.fontWeight = val; break;
        case 'font-style': style.fontStyle = val; break;
        case 'color': style.color = val; break;
        case 'text-align': if (['left','center','right'].indexOf(val) !== -1) style.textAlign = val; break;
        case 'text-transform': if (['uppercase','lowercase','capitalize'].indexOf(val) !== -1) style.textTransform = val; break;
        case 'background-color': style.backgroundColor = val; break;
        case 'border-radius':
          if (val.endsWith('%')) {
            const pct = parseFloat(val);
            if (pct > 0) style.borderRadius = { value: pct, unit: '%' };
          } else {
            const px = parseFloat(val);
            if (px > 0) style.borderRadius = { value: px, unit: 'px' };
          }
          break;
        case '-webkit-text-stroke-color': style.strokeColor = val; break;
        case '-webkit-text-stroke-width': style.strokeWidth = parseFloat(val) || null; break;
      }
    }
    return style;
  }

  function buildFontString(fontSize, style) {
    const parts = [];
    if (style.fontStyle) parts.push(style.fontStyle);
    if (style.fontWeight) parts.push(style.fontWeight);
    parts.push(fontSize + 'px');
    parts.push(style.fontFamily);
    return parts.join(' ');
  }

  function applyTextTransform(text, transform) {
    switch (transform) {
      case 'uppercase': return text.toUpperCase();
      case 'lowercase': return text.toLowerCase();
      case 'capitalize': return text.replace(/\b\w/g, function(c) { return c.toUpperCase(); });
      default: return text;
    }
  }

  // ==================== Canvas Drawing Helpers ====================

  function fillRoundRect(ctx, x, y, w, h, borderRadius) {
    let r = borderRadius.value;
    if (borderRadius.unit === '%') {
      r = (Math.min(w, h) * r) / 100;
    }
    if (r <= 0) {
      ctx.fillRect(x, y, w, h);
      return;
    }
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.lineTo(x + w, y + h - r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.lineTo(x + r, y + h);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);
    ctx.closePath();
    ctx.fill();
  }

  function isCJK(ch) {
    const cp = ch.codePointAt(0);
    return (cp >= 0x4E00 && cp <= 0x9FFF) ||   // CJK Unified Ideographs
           (cp >= 0x3400 && cp <= 0x4DBF) ||   // CJK Extension A
           (cp >= 0x3040 && cp <= 0x309F) ||   // Hiragana
           (cp >= 0x30A0 && cp <= 0x30FF) ||   // Katakana
           (cp >= 0xAC00 && cp <= 0xD7AF) ||   // Hangul
           (cp >= 0x3000 && cp <= 0x303F) ||   // CJK punctuation
           (cp >= 0xFF00 && cp <= 0xFFEF);     // Fullwidth forms
  }

  function tokenizeForWrap(text) {
    const tokens = [];
    let i = 0;
    while (i < text.length) {
      const ch = text[i];
      if (isCJK(ch)) {
        tokens.push(ch);
        i++;
      } else if (/\s/.test(ch)) {
        let space = '';
        while (i < text.length && /\s/.test(text[i])) {
          space += text[i];
          i++;
        }
        tokens.push(space);
      } else {
        let seq = '';
        while (i < text.length && !isCJK(text[i]) && !/\s/.test(text[i])) {
          seq += text[i];
          i++;
        }
        tokens.push(seq);
      }
    }
    return tokens;
  }

  function wrapLines(ctx, text, maxWidth) {
    const lines = [];
    const tokens = tokenizeForWrap(text);
    const hasSpaces = /\s/.test(text);
    let line = '';
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      const testLine = line + token;
      if (ctx.measureText(testLine).width > maxWidth) {
        if (line.length > 0) {
          lines.push(line);
          line = hasSpaces ? token.trimStart() : token;
        } else {
          // Single token wider than maxWidth — force char split
          for (let j = 0; j < token.length; j++) {
            const ch = token[j];
            const chTest = line + ch;
            if (ctx.measureText(chTest).width > maxWidth && line.length > 0) {
              lines.push(line);
              line = ch;
            } else {
              line = chTest;
            }
          }
        }
      } else {
        line = testLine;
      }
    }
    if (line.length > 0) lines.push(line);
    return lines;
  }

  function calcFontSize(ctx, text, maxWidth, maxHeight, textStyle) {
    const padding = 2;
    const availWidth = maxWidth - padding * 2;
    const availHeight = maxHeight - padding * 2;
    if (availWidth <= 0 || availHeight <= 0) return 16;

    const lineHeightRatio = 1.3;
    let lo = 16;
    let hi = Math.min(availHeight, 200);
    let bestSize = lo;

    for (let i = 0; i < 15; i++) {
      const mid = (lo + hi) / 2;
      ctx.font = buildFontString(mid, textStyle);
      const lines = wrapLines(ctx, text, availWidth);
      const totalHeight = lines.length * mid * lineHeightRatio;
      if (totalHeight <= availHeight) {
        bestSize = mid;
        lo = mid;
      } else {
        hi = mid;
      }
      if (hi - lo < 1) break;
    }
    return Math.floor(bestSize);
  }

  function drawTextBox(ctx, text, x, y, maxWidth, maxHeight, fontSize, textStyle) {
    const padding = 2;
    const availWidth = maxWidth - padding * 2;
    ctx.font = buildFontString(fontSize, textStyle);
    if (textStyle.strokeWidth === null) {
      ctx.lineWidth = Math.max(2, fontSize * 0.15);
    }
    const lineHeight = fontSize * 1.3;
    const lines = wrapLines(ctx, text, availWidth);
    let lineY = y + padding;
    for (let i = 0; i < lines.length; i++) {
      let lineX = x + padding;
      if (textStyle.textAlign === 'center') {
        lineX = x + maxWidth / 2;
        ctx.textAlign = 'center';
      } else if (textStyle.textAlign === 'right') {
        lineX = x + maxWidth - padding;
        ctx.textAlign = 'right';
      } else {
        ctx.textAlign = 'left';
      }
      ctx.strokeText(lines[i], lineX, lineY);
      ctx.fillText(lines[i], lineX, lineY);
      lineY += lineHeight;
    }
  }

  // ==================== Image Rendering ====================

  function renderTranslatedImageCanvas(base64Image, boxes, cssText) {
    const textStyle = parseFontCSS(cssText || Settings.get('renderTextCSS'));
    return new Promise(function(resolve, reject) {
      const img = new Image();
      img.onload = function() {
        const c = document.createElement('canvas');
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        const ctx = c.getContext('2d');

        ctx.drawImage(img, 0, 0);

        const clampBox = function(x, y, w, h) {
          x = Math.max(0, x);
          y = Math.max(0, y);
          w = Math.min(w, c.width - x);
          h = Math.min(h, c.height - y);
          return { x: x, y: y, w: w, h: h };
        };

        // First pass: draw background rectangles
        for (let i = 0; i < boxes.length; i++) {
          const box = boxes[i];
          const geo = box.geometry || {};
          const bx = geo.X || geo.x || 0;
          const by = geo.Y || geo.y || 0;
          const bw = geo.width || geo.Width || 0;
          const bh = geo.height || geo.Height || 0;
          const targetText = box.target || '';

          if (bw <= 0 || bh <= 0 || !targetText) continue;

          const c1 = clampBox(bx, by, bw, bh);
          ctx.fillStyle = textStyle.backgroundColor;
          fillRoundRect(ctx, c1.x, c1.y, c1.w, c1.h, textStyle.borderRadius);
        }

        // Second pass: draw text
        for (let i = 0; i < boxes.length; i++) {
          const box = boxes[i];
          const geo = box.geometry || {};
          const bx = geo.X || geo.x || 0;
          const by = geo.Y || geo.y || 0;
          const bw = geo.width || geo.Width || 0;
          const bh = geo.height || geo.Height || 0;
          const targetText = box.target || '';

          if (bw <= 0 || bh <= 0 || !targetText) continue;

          const c2 = clampBox(bx, by, bw, bh);
          const displayText = applyTextTransform(targetText, textStyle.textTransform);

          const fontSize = calcFontSize(ctx, displayText, c2.w, c2.h, textStyle);
          ctx.font = buildFontString(fontSize, textStyle);
          ctx.fillStyle = textStyle.color;
          ctx.textBaseline = 'top';
          ctx.strokeStyle = textStyle.strokeColor;
          if (textStyle.strokeWidth !== null) {
            ctx.lineWidth = textStyle.strokeWidth;
          }

          drawTextBox(ctx, displayText, c2.x, c2.y, c2.w, c2.h, fontSize, textStyle);
        }

        resolve(c.toDataURL('image/png'));
      };
      img.onerror = function() {
        reject(new Error('Failed to load image for rendering'));
      };
      if (base64Image.startsWith('data:')) {
        img.src = base64Image;
      } else {
        img.src = 'data:image/jpeg;base64,' + base64Image;
      }
    });
  }

  // ==================== DOM Rendering ====================

  // Detect text direction (RTL vs LTR) from the first strong directional character.
  function detectTextDirection(text) {
    for (const ch of text) {
      const cp = ch.codePointAt(0);
      if ((cp >= 0x0590 && cp <= 0x05FF) || // Hebrew
          (cp >= 0x0600 && cp <= 0x08FF) || // Arabic + Arabic Supplement
          (cp >= 0xFB50 && cp <= 0xFDFF) || // Arabic Presentation Forms-A
          (cp >= 0xFE70 && cp <= 0xFEFF)) { // Arabic Presentation Forms-B
        return 'rtl';
      }
      if (/[a-zA-ZÀ-˿Ͱ-ӿऀ-࿿Ḁ-῿⺀-�]/.test(ch)) {
        return 'ltr';
      }
    }
    return 'ltr';
  }

  // Binary-search the largest font-size that fits the box without overflowing.
  // Returns { fit, used } where fit is the largest size that fits the box and
  // used is the size actually applied (which may be raised to `minimum`).
  function fitBoxFontSize(el, upperBound, minimum) {
    const cw = el.clientWidth;
    const ch = el.clientHeight;
    const tol = 1;
    const min = (typeof minimum === 'number' && minimum > 0) ? minimum : 4;
    let lo = 4;
    let hi = Math.max(4, Math.min(upperBound || Math.min(ch, 200), 200));
    let best = lo;
    for (let i = 0; i < 12; i++) {
      const mid = (lo + hi) / 2;
      el.style.fontSize = mid + 'px';
      if (el.scrollWidth <= cw + tol && el.scrollHeight <= ch + tol) {
        best = mid;
        lo = mid;
      } else {
        hi = mid;
      }
      if (hi - lo < 0.5) break;
    }
    const fit = Math.floor(best);
    const used = Math.max(min, fit);
    el.style.fontSize = used + 'px';
    return { fit: fit, used: used };
  }

  function loadImageElement(base64Image) {
    return new Promise(function(resolve, reject) {
      const img = new Image();
      img.onload = function() { resolve(img); };
      img.onerror = function() { reject(new Error('Failed to load image for DOM rendering')); };
      if (base64Image.startsWith('data:')) {
        img.src = base64Image;
      } else {
        img.src = 'data:image/jpeg;base64,' + base64Image;
      }
    });
  }

  // Render translated text by building a real DOM overlay and rasterizing it with
  // html-to-image (SVG foreignObject -> native browser layout). This makes Arabic
  // RTL bidi and CSS like writing-mode behave exactly as in a browser, and lets the
  // user's renderTextCSS apply verbatim instead of being converted to canvas props.
  //
  // The base image is NOT placed inside the DOM: Safari cannot rasterize an <img>
  // inside SVG foreignObject (it comes out blank), so the image is drawn directly
  // on the result canvas and the rasterized text overlay is composited on top.
  async function renderTranslatedImageDOM(base64Image, boxes, cssText) {
    const img = await loadImageElement(base64Image);
    const natW = img.naturalWidth;
    const natH = img.naturalHeight;
    if (!natW || !natH) throw new Error('Invalid image dimensions');

    // The wrapper is positioned off-screen; the container (the node passed to
    // html-to-image) must sit at 0,0 in its own coordinates. html-to-image clones
    // the captured node into an SVG foreignObject, and an off-screen offset on
    // that node would be carried over, producing a transparent output image.
    const wrapper = document.createElement('div');
    wrapper.style.cssText =
      'all:initial;display:block;position:fixed;left:-99999px;top:0;' +
      'width:' + natW + 'px;height:' + natH + 'px;';

    // Text-only overlay; the transparent background lets the base image show
    // through where there is no text box when composited.
    const container = document.createElement('div');
    container.style.cssText =
      'all:initial;display:block;position:relative;left:0;top:0;' +
      'width:' + natW + 'px;height:' + natH + 'px;' +
      'background-color:transparent;';

    const clampBox = function(x, y, w, h) {
      x = Math.max(0, x);
      y = Math.max(0, y);
      w = Math.min(w, natW - x);
      h = Math.min(h, natH - y);
      return { x: x, y: y, w: w, h: h };
    };

    const renderTextCSS = cssText || Settings.get('renderTextCSS');
    const minFontSize = 14;
    const userCssHasDirection = /(^|[;])\s*direction\s*:/.test(renderTextCSS);

    // Respect an explicit font-size in the user CSS as an upper bound; otherwise autofit freely.
    let userFontSize = null;
    const fontMatch = renderTextCSS.match(/font-size\s*:\s*([^;]+)/i);
    if (fontMatch) {
      const m = fontMatch[1].trim().match(/^([\d.]+)\s*(px|rem|em)?$/);
      if (m) {
        const n = parseFloat(m[1]);
        userFontSize = (m[2] === 'em' || m[2] === 'rem') ? n * 16 : n;
      }
    }

    // Base text styles first; the user's text CSS is appended last so it can
    // override any of them. overflow:hidden is kept so auto-fit text normally
    // clips at the box edge. When the minimum font size makes the text overflow,
    // the element is grown to the full text block and moved, so the background
    // paints over the whole overflow region too.
    const textBaseCSS =
      'all:initial;position:absolute;display:block;box-sizing:border-box;margin:0;padding:2px;' +
      'overflow:hidden;line-height:1.3;color:#000;background-color:#fff;font-family:sans-serif;';

    wrapper.appendChild(container);
    (document.body || document.documentElement).appendChild(wrapper);

    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      const geo = box.geometry || {};
      const bx = geo.X || geo.x || 0;
      const by = geo.Y || geo.y || 0;
      const bw = geo.width || geo.Width || 0;
      const bh = geo.height || geo.Height || 0;
      const targetText = box.target || '';
      if (bw <= 0 || bh <= 0 || !targetText) continue;

      const c = clampBox(bx, by, bw, bh);
      if (c.w <= 0 || c.h <= 0) continue;

      // Single layer: background + text live on one element. When the minimum
      // font size makes the text overflow, the element grows to cover the whole
      // text block (so the overflow region keeps the background) and then moves
      // so that block stays inside the image.
      const el = document.createElement('div');
      el.style.cssText = textBaseCSS +
        'left:' + c.x + 'px;top:' + c.y + 'px;' +
        'width:' + c.w + 'px;height:' + c.h + 'px;' +
        renderTextCSS;
      if (!userCssHasDirection) {
        el.style.direction = detectTextDirection(targetText);
      }
      el.textContent = targetText;
      container.appendChild(el);
      const sized = fitBoxFontSize(el, userFontSize, minFontSize);
      if (sized.used > sized.fit) {
        // The minimum font size pushed the text above what the box can hold.
        // scrollWidth/Height give the full text extents. Grow the element to
        // those extents so the background paints over the overflow too, then
        // move it so the grown block stays inside the image. Because the box
        // grows, the original text underneath is still covered by the white
        // background even after the move.
        const textW = Math.min(el.scrollWidth, natW);
        const textH = Math.min(el.scrollHeight, natH);
        el.style.width = textW + 'px';
        el.style.height = textH + 'px';
        let nx = c.x;
        let ny = c.y;
        if (nx + textW > natW) nx = Math.max(0, natW - textW);
        if (ny + textH > natH) ny = Math.max(0, natH - textH);
        if (nx !== c.x) el.style.left = nx + 'px';
        if (ny !== c.y) el.style.top = ny + 'px';
      }
    }

    try {
      // Rasterize just the text overlay (transparent background).
      const overlayCanvas = await htmlToImage.toCanvas(container, {
        width: natW,
        height: natH,
        canvasWidth: natW,
        canvasHeight: natH,
        skipFonts: true,
        pixelRatio: 1
      });
      // Composite: draw the base image, then the text overlay on top.
      const out = document.createElement('canvas');
      out.width = natW;
      out.height = natH;
      const ctx = out.getContext('2d');
      ctx.drawImage(img, 0, 0, natW, natH);
      ctx.drawImage(overlayCanvas, 0, 0, natW, natH);
      return out.toDataURL('image/webp', 0.8);
    } finally {
      wrapper.remove();
    }
  }

  // Render translated text onto an image. Prefers DOM rendering via html-to-image
  // (better CSS fidelity, RTL bidi, writing-mode); falls back to canvas when the
  // library is missing or DOM rendering fails.
  async function renderTranslatedImage(base64Image, boxes, cssText) {
    if (typeof htmlToImage === 'undefined' || !htmlToImage.toCanvas) {
      return renderTranslatedImageCanvas(base64Image, boxes, cssText);
    }
    try {
      return await renderTranslatedImageDOM(base64Image, boxes, cssText);
    } catch (e) {
      console.warn('DOM text rendering failed, falling back to canvas.', e);
      return renderTranslatedImageCanvas(base64Image, boxes, cssText);
    }
  }

  // ==================== Image Utilities ====================

  function isSupportWebp(elem) {
    let _isSupportWebp = true;
    if (!!(elem.getContext && elem.getContext('2d'))) {
      _isSupportWebp = elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    } else {
      _isSupportWebp = false;
    }
    return _isSupportWebp;
  }

  function compressToWebP(dataURL, quality) {
    quality = quality || 0.8;
    return new Promise(function(resolve, reject) {
      const img = new Image();
      img.onload = function() {
        const c = document.createElement('canvas');
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        const ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(c.toDataURL('image/webp', quality));
      };
      img.onerror = reject;
      img.src = dataURL;
    });
  }

  function compressImage(img, maxWidth) {
    maxWidth = maxWidth || 1500;
    const canvas = document.createElement('canvas');
    let width = img.naturalWidth;
    let height = img.naturalHeight;
    if (maxWidth && img.naturalWidth > maxWidth) {
      width = maxWidth;
      height = img.naturalHeight * maxWidth / img.naturalWidth;
    }
    canvas.width = width;
    canvas.height = height;
    const imageFormat = isSupportWebp(canvas) ? 'image/webp' : 'image/jpeg';
    const quality = 0.8;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, canvas.width, canvas.height);
    return { dataURL: canvas.toDataURL(imageFormat, quality), format: imageFormat };
  }

  function imageToDataURL(img, format, quality) {
    format = format || 'image/webp';
    quality = quality || 0.8;
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    if (format === 'image/webp' && !isSupportWebp(canvas)) {
      format = 'image/jpeg';
    }
    return canvas.toDataURL(format, quality);
  }

  // Create text overlay HTML elements on top of an image
  function createTextOverlay(container, boxes, imgElement, scale) {
    scale = scale || 1.0;
    // Remove existing overlay
    const existingOverlay = container.querySelector('.text-overlay');
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement('div');
    overlay.className = 'text-overlay';
    overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;';

    // Use getBoundingClientRect for accurate rendered size, separate X/Y ratios
    const rect = imgElement.getBoundingClientRect();
    const displayW = rect.width || imgElement.clientWidth || imgElement.offsetWidth || 1;
    const displayH = rect.height || imgElement.clientHeight || imgElement.offsetHeight || 1;
    const natW = imgElement.naturalWidth || imgElement.width || 1;
    const natH = imgElement.naturalHeight || imgElement.height || 1;
    const ratioX = displayW / natW / scale;
    const ratioY = displayH / natH / scale;

    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      const geo = box.geometry || {};
      const left = Math.ceil(ratioX * (geo.X || geo.x || 0));
      const top = Math.ceil(ratioY * (geo.Y || geo.y || 0));
      const width = Math.ceil(ratioX * (geo.width || geo.Width || 0));
      const height = Math.ceil(ratioY * (geo.height || geo.Height || 0));

      const boxDiv = document.createElement('div');
      boxDiv.className = 'text-box';
      boxDiv.style.cssText =
        'position:absolute;' +
        'left:' + left + 'px;' +
        'top:' + top + 'px;' +
        'width:' + width + 'px;' +
        'height:' + height + 'px;' +
        'color:transparent;background:transparent;' +
        'pointer-events:auto;cursor:pointer;';
      boxDiv.setAttribute('data-src', box.text || box.source || '');
      boxDiv.setAttribute('data-tgt', box.target || '');
      boxDiv.title = (box.text || '') + ' → ' + (box.target || '');

      // Show text styling when visible
      boxDiv.addEventListener('click', function(e) {
        e.stopPropagation();
        // Will be handled by app.js
        const event = new CustomEvent('textbox-click', {
          bubbles: true,
          detail: { box: box, element: boxDiv }
        });
        boxDiv.dispatchEvent(event);
      });

      overlay.appendChild(boxDiv);
    }

    container.style.position = 'relative';
    container.appendChild(overlay);
    return overlay;
  }

  // Show text on overlay boxes
  function showTextOverlay(container, cssText) {
    const textStyle = parseFontCSS(cssText || Settings.get('renderTextCSS'));
    const boxes = container.querySelectorAll('.text-box');
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      box.style.color = textStyle.color;
      box.style.background = textStyle.backgroundColor;
      if (textStyle.borderRadius.value > 0) {
        box.style.borderRadius = textStyle.borderRadius.value + textStyle.borderRadius.unit;
      }
      box.style.textAlign = textStyle.textAlign;
      box.style.fontFamily = textStyle.fontFamily;
      if (textStyle.fontWeight) box.style.fontWeight = textStyle.fontWeight;
      box.style.display = 'flex';
      box.style.alignItems = 'center';
      box.style.justifyContent = 'center';
      box.style.overflow = 'hidden';
      box.style.textTransform = textStyle.textTransform || 'none';
      box.style.textShadow = '0 0 3px white, 0 0 3px white, 0 0 3px white';
      box.innerText = box.getAttribute('data-tgt') || '';
      box.classList.add('show-text');
    }
  }

  function hideTextOverlay(container) {
    const boxes = container.querySelectorAll('.text-box');
    for (let i = 0; i < boxes.length; i++) {
      const box = boxes[i];
      box.style.color = 'transparent';
      box.style.background = 'transparent';
      box.style.display = '';
      box.style.borderRadius = '';
      box.innerText = '';
      box.classList.remove('show-text');
    }
  }

  return {
    parseFontCSS: parseFontCSS,
    buildFontString: buildFontString,
    applyTextTransform: applyTextTransform,
    renderTranslatedImage: renderTranslatedImage,
    isSupportWebp: isSupportWebp,
    compressToWebP: compressToWebP,
    compressImage: compressImage,
    imageToDataURL: imageToDataURL,
    createTextOverlay: createTextOverlay,
    showTextOverlay: showTextOverlay,
    hideTextOverlay: hideTextOverlay
  };
})();
