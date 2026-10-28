// PSD Export
// Writes a layered Photoshop document from a translation result:
//   - one editable text layer per translated text box
//   - a "text removed" background layer (original image with text boxes painted over)
//   - the original image, hidden by default
// Uses ag-psd for PSD writing, loaded on demand from a CDN the first time a
// PSD is exported (like OpenCV/PaddleOCR in ocr.js), so it costs nothing
// until the user actually exports.

const PSD = (function() {
  'use strict';

  // Pinned version so a CDN update can't change writePsd behavior.
  const AG_PSD_PRIMARY = 'https://cdn.jsdmirror.com/npm/ag-psd@33.0.0/dist/bundle.min.js';
  const AG_PSD_FALLBACK = 'https://cdn.jsdelivr.net/npm/ag-psd@33.0.0/dist/bundle.min.js';
  const AG_PSD_TIMEOUT_MS = 15000;

  let agPsd = null;
  let agPsdPromise = null;

  // Try the primary CDN, switch to the fallback on error or timeout, and
  // resolve once the global agPsd exists. Concurrent callers share one load.
  function loadAgPsd() {
    if (agPsd && agPsd.writePsd) return Promise.resolve(agPsd);
    if (agPsdPromise) return agPsdPromise;

    agPsdPromise = new Promise(function(resolve, reject) {
      let settled = false;
      const finish = function(err) {
        if (settled) return;
        settled = true;
        // The UMD bundle assigns the global; keep a module-local reference so
        // the rest of this file never depends on the global lookup.
        if (!err && window.agPsd && window.agPsd.writePsd) agPsd = window.agPsd;
        if (agPsd) {
          resolve(agPsd);
        } else {
          agPsdPromise = null;
          reject(err || new Error('PSD library is not loaded.'));
        }
      };
      const inject = function(src, isFallback) {
        const script = document.createElement('script');
        script.src = src;
        script.onload = function() { finish(); };
        script.onerror = function() {
          script.remove();
          if (isFallback) finish(new Error('Failed to load PSD library.'));
          else inject(AG_PSD_FALLBACK, true);
        };
        document.head.appendChild(script);
        if (!isFallback) {
          setTimeout(function() {
            if (settled) return;
            script.remove();
            inject(AG_PSD_FALLBACK, true);
          }, AG_PSD_TIMEOUT_MS);
        }
      };
      inject(AG_PSD_PRIMARY, false);
    });
    return agPsdPromise;
  }

  // Common CSS font families mapped to Photoshop PostScript names.
  const FONT_MAP = {
    'arial': 'ArialMT',
    'arial black': 'Arial-Black',
    'helvetica': 'Helvetica',
    'helvetica neue': 'HelveticaNeue',
    'times new roman': 'TimesNewRomanPSMT',
    'times': 'TimesNewRomanPSMT',
    'georgia': 'Georgia',
    'verdana': 'Verdana',
    'tahoma': 'Tahoma',
    'trebuchet ms': 'TrebuchetMS',
    'courier new': 'CourierNewPSMT',
    'courier': 'Courier',
    'segoe ui': 'SegoeUI',
    'comic sans ms': 'ComicSansMS',
    'impact': 'Impact',
    'microsoft yahei': 'MicrosoftYaHei',
    '微软雅黑': 'MicrosoftYaHei',
    'simsun': 'SimSun',
    '宋体': 'SimSun',
    'simhei': 'SimHei',
    '黑体': 'SimHei',
    'yu gothic': 'YuGothic',
    'yu gothic ui': 'YuGothicUI',
    'ms gothic': 'MS-Gothic',
    'meiryo': 'Meiryo',
    'malgun gothic': 'MalgunGothic',
    'gulim': 'Gulim',
    'noto sans': 'NotoSans',
    'noto sans cjk jp': 'NotoSansCJKjp-Regular',
    'noto sans cjk sc': 'NotoSansCJKsc-Regular',
    'noto sans cjk kr': 'NotoSansCJKkr-Regular'
  };

  // Fallback font by target language when the CSS only says "sans-serif".
  const LANG_DEFAULT_FONT = {
    ja: 'YuGothic',
    zh: 'MicrosoftYaHei',
    ko: 'MalgunGothic',
    ar: 'ArialMT',
    fa: 'ArialMT',
    he: 'ArialMT',
    ur: 'ArialMT',
    th: 'Tahoma',
    hi: 'Mangal',
    bn: 'Vrinda'
  };

  function firstFamily(family) {
    if (!family) return '';
    return String(family).split(',')[0].trim().replace(/^["']|["']$/g, '');
  }

  function mapFontName(family, lang) {
    const first = firstFamily(family);
    const key = first.toLowerCase();
    if (FONT_MAP[key]) return FONT_MAP[key];
    if (!first || key === 'sans-serif' || key === 'sans' || key === 'system-ui') {
      return LANG_DEFAULT_FONT[lang] || 'ArialMT';
    }
    if (key === 'serif') return 'TimesNewRomanPSMT';
    if (key === 'monospace') return 'CourierNewPSMT';
    // Strip spaces so values like "Segoe UI" become PostScript-ish names.
    return first.replace(/\s+/g, '');
  }

  function cssColorToRgb(css) {
    // Let the browser normalize any color syntax (#rgb, rgb(), named, ...).
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    if (css) ctx.fillStyle = css; // invalid values are ignored by the browser
    ctx.fillRect(0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    return { r: data[0], g: data[1], b: data[2] };
  }

  function isBold(weight) {
    if (!weight) return false;
    if (weight === 'bold' || weight === 'bolder') return true;
    const n = parseInt(weight, 10);
    return !isNaN(n) && n >= 600;
  }

  // CSS text-align is physical; direction:rtl flips the default left/start.
  function justificationFor(item) {
    let align = (item.style && item.style.textAlign) || 'left';
    if (item.direction === 'rtl') {
      if (align === 'left') align = 'right';
      else if (align === 'right') align = 'left';
    }
    if (align === 'center') return 'center';
    if (align === 'right') return 'right';
    return 'left';
  }

  function layerName(text, index) {
    const oneLine = String(text || '').replace(/\s+/g, ' ').trim();
    const suffix = oneLine ? ': ' + oneLine.slice(0, 24) : '';
    return 'Text ' + (index + 1) + suffix;
  }

  function isVerticalCSS(css) {
    return /writing-mode\s*:\s*(vertical|sideways)/i.test(css || '');
  }

  function imageToCanvas(dataURL) {
    return new Promise(function(resolve, reject) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);
        resolve(canvas);
      };
      img.onerror = function() {
        reject(new Error('Failed to load image for PSD export.'));
      };
      img.src = dataURL;
    });
  }

  function download(buffer, filename) {
    const blob = new Blob([buffer], { type: 'image/vnd.adobe.photoshop' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
  }

  async function buildComposite(renderedDataURL, cleanCanvas, textLayers, width, height) {
    if (renderedDataURL) {
      try {
        const rendered = await imageToCanvas(renderedDataURL);
        if (rendered.width === width && rendered.height === height) return rendered;
        const scaled = document.createElement('canvas');
        scaled.width = width;
        scaled.height = height;
        scaled.getContext('2d').drawImage(rendered, 0, 0, width, height);
        return scaled;
      } catch (e) {
        console.warn('Failed to load rendered image for PSD composite.', e);
      }
    }
    // Fallback: composite the clean background and the text layer bitmaps.
    const out = document.createElement('canvas');
    out.width = width;
    out.height = height;
    const ctx = out.getContext('2d');
    ctx.drawImage(cleanCanvas, 0, 0);
    for (let i = 0; i < textLayers.length; i++) {
      const layer = textLayers[i];
      ctx.drawImage(layer.canvas, layer.left || 0, layer.top || 0);
    }
    return out;
  }

  // options: {
  //   workingDataURL, renderedDataURL, boxes, cssText, filename, targetLang,
  //   onLoadStart (called when the ag-psd library starts loading),
  //   onLoaded (called once the library is ready, if it had to be loaded)
  // }
  async function exportPSD(options) {
    const workingDataURL = options.workingDataURL;
    if (!workingDataURL) throw new Error('No translated image to export.');

    const boxes = options.boxes || [];
    if (!boxes.length) throw new Error('No text boxes to export.');

    if (!agPsd && options.onLoadStart) options.onLoadStart();
    agPsd = await loadAgPsd();
    if (options.onLoaded) options.onLoaded();

    const cssText = options.cssText || Settings.get('renderTextCSS');
    const targetLang = options.targetLang || Settings.get('targetLang');
    const layout = await Render.layoutTranslatedText(workingDataURL, boxes, cssText);
    if (!layout.items.length) throw new Error('No text boxes to export.');

    const textStyle = layout.style || Render.parseFontCSS(cssText);
    const vertical = isVerticalCSS(cssText);

    const cleanCanvas = await Render.renderCleanBackground(workingDataURL, layout.items, cssText);
    const width = cleanCanvas.width;
    const height = cleanCanvas.height;
    if (!width || !height) throw new Error('Invalid image dimensions.');
    const originalCanvas = await imageToCanvas(workingDataURL);

    const children = [];
    const textLayers = [];

    for (let i = 0; i < layout.items.length; i++) {
      const item = layout.items[i];
      const rect = item.rect;
      const textCanvas = Render.renderTextLayerCanvas(item, cssText);
      const top = Math.round(rect.y);
      const left = Math.round(rect.x);

      if (vertical) {
        // ag-psd's vertical text support can produce PSDs that crash Photoshop,
        // so keep vertical text as a regular raster layer.
        const rasterLayer = {
          name: layerName(item.text, i) + ' (raster)',
          top: top,
          left: left,
          canvas: textCanvas
        };
        children.push(rasterLayer);
        textLayers.push(rasterLayer);
        continue;
      }

      const displayText = Render.applyTextTransform(item.text, textStyle.textTransform);
      const textLayer = {
        name: layerName(item.text, i),
        top: top,
        left: left,
        canvas: textCanvas,
        text: {
          text: displayText,
          transform: [1, 0, 0, 1, rect.x, rect.y],
          shapeType: 'box',
          boxBounds: [0, 0, Math.max(1, rect.w), Math.max(1, rect.h)],
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.w,
          bottom: rect.y + rect.h,
          style: {
            font: { name: mapFontName(textStyle.fontFamily, targetLang) },
            fontSize: Math.max(1, Math.round(item.fontSize)),
            fillColor: cssColorToRgb(textStyle.color),
            fauxBold: isBold(textStyle.fontWeight)
          },
          paragraphStyle: {
            justification: justificationFor(item)
          }
        }
      };
      children.push(textLayer);
      textLayers.push(textLayer);
    }

    children.push({ name: 'Text Removed', canvas: cleanCanvas });
    children.push({ name: 'Original', canvas: originalCanvas, hidden: true });

    // ag-psd writes children bottom-to-top (first entry = bottom layer),
    // so reverse the top-to-bottom order built above: text layers, then
    // "Text Removed", then the hidden "Original".
    children.reverse();

    const psd = { width: width, height: height, children: children };
    psd.canvas = await buildComposite(
      options.renderedDataURL, cleanCanvas, textLayers, width, height
    );

    const buffer = agPsd.writePsd(psd);
    download(buffer, options.filename || 'translated.psd');
  }

  return {
    export: exportPSD
  };
})();
