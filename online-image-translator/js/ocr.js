// OCR Engine - PaddleOCR via esearch-ocr (CDN)
// Ported from Chrome extension's page-ocr.js, getImage.js, and translator.js

const OCR = (function() {
  'use strict';

  let paddleReady = false;
  let paddleCurrentLang = null;
  let paddleInitPromise = null;

  // PP-OCRv6 models from ModelScope CDN (mirrors Chrome extension's local model logic)
  // Default (zh/en/etc.): tiny det + tiny rec + tiny dict
  // Japanese: tiny det + small rec + small dict
  // Other languages: v5/v4 language-specific rec models, fallback to default tiny det
  const PADDLE_CDN_BASE = 'https://www.modelscope.cn/models/RapidAI/RapidOCR/resolve/v3.9.1';
  const PADDLE_CDN_BASE_V5 = 'https://www.modelscope.cn/models/RapidAI/RapidOCR/resolve/v3.4.0';
  const PADDLE_MODEL_URLS = {
    default: {
      det: PADDLE_CDN_BASE + '/onnx/PP-OCRv6/det/PP-OCRv6_det_tiny.onnx',
      rec: PADDLE_CDN_BASE + '/onnx/PP-OCRv6/rec/PP-OCRv6_rec_tiny.onnx',
      dict: PADDLE_CDN_BASE + '/paddle/PP-OCRv6/rec/PP-OCRv6_rec_tiny/ppocrv6_tiny_dict.txt'
    },
    japanese: {
      det: PADDLE_CDN_BASE + '/onnx/PP-OCRv6/det/PP-OCRv6_det_tiny.onnx',
      rec: PADDLE_CDN_BASE + '/onnx/PP-OCRv6/rec/PP-OCRv6_rec_small.onnx',
      dict: PADDLE_CDN_BASE + '/paddle/PP-OCRv6/rec/PP-OCRv6_rec_small/ppocrv6_dict.txt'
    },
    arabic: {
      det: PADDLE_CDN_BASE_V5 + '/onnx/PP-OCRv4/det/Multilingual_PP-OCRv3_det_infer.onnx',
      rec: PADDLE_CDN_BASE_V5 + '/onnx/PP-OCRv5/rec/arabic_PP-OCRv5_rec_mobile.onnx',
      dict: PADDLE_CDN_BASE_V5 + '/paddle/PP-OCRv5/rec/arabic_PP-OCRv5_rec_mobile/ppocrv5_arabic_dict.txt'
    },
    korean: {
      rec: PADDLE_CDN_BASE_V5 + '/onnx/PP-OCRv5/rec/korean_PP-OCRv5_rec_mobile_infer.onnx',
      dict: PADDLE_CDN_BASE_V5 + '/paddle/PP-OCRv5/rec/korean_PP-OCRv5_rec_mobile_infer/ppocrv5_korean_dict.txt'
    },
    latin: {
      rec: PADDLE_CDN_BASE_V5 + '/onnx/PP-OCRv5/rec/latin_PP-OCRv5_rec_mobile_infer.onnx',
      dict: PADDLE_CDN_BASE_V5 + '/paddle/PP-OCRv5/rec/latin_PP-OCRv5_rec_mobile_infer/ppocrv5_latin_dict.txt'
    },
    eslav: {
      rec: PADDLE_CDN_BASE_V5 + '/onnx/PP-OCRv5/rec/eslav_PP-OCRv5_rec_mobile_infer.onnx',
      dict: PADDLE_CDN_BASE_V5 + '/paddle/PP-OCRv5/rec/eslav_PP-OCRv5_rec_mobile_infer/ppocrv5_eslav_dict.txt'
    },
    th: {
      rec: PADDLE_CDN_BASE_V5 + '/onnx/PP-OCRv5/rec/th_PP-OCRv5_rec_mobile_infer.onnx',
      dict: PADDLE_CDN_BASE_V5 + '/paddle/PP-OCRv5/rec/th_PP-OCRv5_rec_mobile_infer/ppocrv5_th_dict.txt'
    }
  };

  const PADDLE_LANG_TO_MODEL = {
    ja: 'japanese', ar: 'arabic', ko: 'korean',
    ru: 'eslav', th: 'th',
    fr: 'latin', it: 'latin', es: 'latin', pt: 'latin',
    id: 'latin', vi: 'latin', de: 'latin', nl: 'latin',
    tr: 'latin', pl: 'latin', sv: 'latin', da: 'latin',
    no: 'latin', fi: 'latin', hu: 'latin', cs: 'latin',
    ro: 'latin', bg: 'latin', el: 'latin', ms: 'latin'
  };



  // ==================== PaddleOCR (esearch-ocr CDN) ====================

  function getPaddleModelInfo(sourceLang) {
    const modelKey = PADDLE_LANG_TO_MODEL[sourceLang] || 'default';
    const modelInfo = PADDLE_MODEL_URLS[modelKey] || PADDLE_MODEL_URLS['default'];
    return {
      modelKey: modelKey,
      detUrl: modelInfo.det,
      recUrl: modelInfo.rec,
      dicUrl: modelInfo.dict
    };
  }

  let depsLoading = false;
  let depsLoaded = false;
  let depsPromise = null;
  let _onProgress = null;

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      const existing = document.querySelector('script[src="' + src + '"]');
      if (existing) { resolve(); return; }
      const script = document.createElement('script');
      script.src = src;
      script.onload = function() { resolve(); };
      script.onerror = function() { reject(new Error('Failed to load: ' + src)); };
      document.head.appendChild(script);
    });
  }

  // Try primary CDN (jsdelivr, global), fall back to mirror (jsdmirror, China) after timeout.
  // Resolves with the URL that was actually used.
  function loadScriptCDN(primary, fallback, timeoutMs) {
    timeoutMs = timeoutMs || 15000;
    return new Promise(function(resolve, reject) {
      // Check if primary already loaded
      if (document.querySelector('script[src="' + primary + '"]')) { resolve(primary); return; }
      if (document.querySelector('script[src="' + fallback + '"]')) { resolve(fallback); return; }

      const script = document.createElement('script');
      let resolved = false;
      const done = function(src) {
        if (resolved) return;
        resolved = true;
        resolve(src);
      };

      script.onload = function() { done(primary); };
      script.onerror = function() {
        if (resolved) return;
        script.remove();
        const fb = document.createElement('script');
        fb.src = fallback;
        fb.onload = function() { done(fallback); };
        fb.onerror = function() { reject(new Error('Failed to load: ' + primary + ' / ' + fallback)); };
        document.head.appendChild(fb);
      };
      script.src = primary;
      document.head.appendChild(script);

      // Timeout: switch to fallback if primary takes too long
      setTimeout(function() {
        if (resolved) return;
        script.remove();
        const fb = document.createElement('script');
        fb.src = fallback;
        fb.onload = function() { done(fallback); };
        fb.onerror = function() { reject(new Error('Failed to load: ' + primary + ' / ' + fallback)); };
        document.head.appendChild(fb);
      }, timeoutMs);
    });
  }

  async function loadDependencies(onProgress) {
    if (depsLoaded) return;
    if (depsLoading) {
      _onProgress = onProgress;
      return depsPromise;
    }
    depsLoading = true;
    _onProgress = onProgress;

    depsPromise = (async function() {
      const report = function(msg) { if (_onProgress) _onProgress(msg); };

      // 1. ONNX Runtime (jsdelivr → jsdmirror fallback)
      let ortCDN = 'https://cdn.jsdelivr.net/npm/onnxruntime-web';
      if (typeof window.ort === 'undefined') {
        report('Loading ONNX Runtime...');
        const used = await loadScriptCDN(
          'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/ort.min.js',
          'https://cdn.jsdmirror.com/npm/onnxruntime-web/dist/ort.min.js'
        );
        // Derive base URL: strip '/dist/ort.min.js' suffix
        ortCDN = used.replace(/\/dist\/ort\.min\.js$/, '');
      }
      // Set wasm path to match the CDN that actually loaded
      if (window.ort && window.ort.env && window.ort.env.wasm) {
        window.ort.env.wasm.wasmPaths = ortCDN + '/dist/';
      }

      // 2. OpenCV.js (jsdelivr → jsdmirror fallback)
      if (typeof window.cv === 'undefined') {
        report('Loading OpenCV...');
        await loadScriptCDN(
          'https://cdn.jsdelivr.net/npm/paddleocr-browser@1.0.4/dist/opencv.js',
          'https://cdn.jsdmirror.com/npm/paddleocr-browser@1.0.4/dist/opencv.js'
        );
      }

      // 3. esearch-ocr (local build)
      if (typeof window['esearch-ocr'] === 'undefined') {
        report('Loading OCR engine...');
        // esearch-ocr.umd.js sets window['esearch-ocr']
        await loadScript('/online-image-translator/js/lib/esearch-ocr/dist/esearch-ocr.umd.js');
      }

      // Wait for OpenCV to be fully ready (it sets cv on a callback)
      if (typeof window.cv === 'undefined' || !window.cv.Mat) {
        report('Initializing OpenCV...');
        await new Promise(function(resolve) {
          const check = function() {
            if (typeof window.cv !== 'undefined' && window.cv.Mat) {
              resolve();
            } else if (typeof Module !== 'undefined' && Module.onRuntimeInitialized) {
              const orig = Module.onRuntimeInitialized;
              Module.onRuntimeInitialized = function() {
                if (orig) orig();
                resolve();
              };
            } else {
              setTimeout(check, 200);
            }
          };
          check();
        });
      }

      depsLoaded = true;
      report('');
    })();

    return depsPromise;
  }

  async function initPaddle(sourceLang, onProgress) {
    // Load deps first if needed
    if (!depsLoaded) {
      await loadDependencies(onProgress);
    }

    // If same language, reuse
    if (paddleCurrentLang === sourceLang && paddleReady) return;

    if (paddleInitPromise && paddleCurrentLang === sourceLang) {
      return paddleInitPromise;
    }

    paddleCurrentLang = sourceLang;
    paddleReady = false;

    paddleInitPromise = (async function() {
      const Paddle = window['esearch-ocr'];

      const modelInfo = getPaddleModelInfo(sourceLang);
      const res = await fetch(modelInfo.dicUrl);
      const dic = await res.text();

      await Paddle.init({
        detPath: modelInfo.detUrl,
        recPath: modelInfo.recUrl,
        dic: dic,
        ort: window.ort,
        node: false,
        cv: window.cv
      });

      paddleReady = true;
    })();

    return paddleInitPromise;
  }

  // ==================== Text Box Merging (from page-ocr.js) ====================

  function mergeTextBoxes(items, sourceLang, xSpacing, ySpacing) {
    if (items.length === 0) return [];
    const xGap = (xSpacing != null) ? xSpacing : 15;
    const yGap = (ySpacing != null) ? ySpacing : 15;

    function xOverlapRatio(a, b) {
      const aMinX = Math.min(a[0][0], a[3][0]);
      const aMaxX = Math.max(a[1][0], a[2][0]);
      const bMinX = Math.min(b[0][0], b[3][0]);
      const bMaxX = Math.max(b[1][0], b[2][0]);
      const aW = aMaxX - aMinX;
      const bW = bMaxX - bMinX;
      const marginA = Math.min(aW * 0.25, 20);
      const marginB = Math.min(bW * 0.25, 20);
      const overlap = Math.min(aMaxX + marginA, bMaxX + marginB) - Math.max(aMinX - marginA, bMinX - marginB);
      if (overlap <= 0) return 0;
      const minW = Math.min(aW, bW);
      return overlap / minW;
    }

    function xCloseEnough(a, b) {
      const aMinX = Math.min(a[0][0], a[3][0]);
      const aMaxX = Math.max(a[1][0], a[2][0]);
      const bMinX = Math.min(b[0][0], b[3][0]);
      const bMaxX = Math.max(b[1][0], b[2][0]);
      let gap;
      if (aMaxX < bMinX) gap = bMinX - aMaxX;
      else if (bMaxX < aMinX) gap = aMinX - bMaxX;
      else gap = 0;
      return gap <= xGap;
    }

    function yOverlapRatio(a, b) {
      const aMinY = Math.min(a[0][1], a[1][1]);
      const aMaxY = Math.max(a[2][1], a[3][1]);
      const bMinY = Math.min(b[0][1], b[1][1]);
      const bMaxY = Math.max(b[2][1], b[3][1]);
      const aH = aMaxY - aMinY;
      const bH = bMaxY - bMinY;
      const marginA = Math.min(aH * 0.25, 30);
      const marginB = Math.min(bH * 0.25, 30);
      const overlap = Math.min(aMaxY + marginA, bMaxY + marginB) - Math.max(aMinY - marginA, bMinY - marginB);
      if (overlap <= 0) return 0;
      const minH = Math.min(aH, bH);
      return overlap / minH;
    }

    function yCloseEnough(a, b) {
      const aMinY = Math.min(a[0][1], a[1][1]);
      const aMaxY = Math.max(a[2][1], a[3][1]);
      const bMinY = Math.min(b[0][1], b[1][1]);
      const bMaxY = Math.max(b[2][1], b[3][1]);
      let gap;
      if (aMaxY < bMinY) gap = bMinY - aMaxY;
      else if (bMaxY < aMinY) gap = aMinY - bMaxY;
      else gap = 0;
      return gap <= yGap;
    }

    function unionBox(group) {
      const allX = [], allY = [];
      group.forEach(function(item) {
        item.box.forEach(function(p) { allX.push(p[0]); allY.push(p[1]); });
      });
      const minX = Math.min.apply(null, allX);
      const maxX = Math.max.apply(null, allX);
      const minY = Math.min.apply(null, allY);
      const maxY = Math.max.apply(null, allY);
      return [[minX, minY], [maxX, minY], [maxX, maxY], [minX, maxY]];
    }

    const heights = items.map(function(item) {
      return Math.abs(item.box[2][1] - item.box[0][1]);
    }).sort(function(a, b) { return a - b; });
    const medianHeight = heights[Math.floor(heights.length / 2)] || 10;
    const lineThreshold = medianHeight * 0.5;

    const sorted = items.slice().sort(function(a, b) {
      const aY = a.box[0][1];
      const bY = b.box[0][1];
      if (Math.abs(aY - bY) < lineThreshold) {
        return a.box[0][0] - b.box[0][0];
      }
      return aY - bY;
    });

    // Detect vertical text
    let tallCount = 0;
    items.forEach(function(item) {
      const w = item.box[1][0] - item.box[0][0];
      const h = item.box[2][1] - item.box[0][1];
      if (h > w) tallCount++;
    });
    const isVertical = tallCount > items.length / 2;
    const isRTL = sourceLang === 'ar';

    // Phase 1: horizontal merge into lines
    const lines = [];
    const used1 = new Array(sorted.length).fill(false);

    for (let i = 0; i < sorted.length; i++) {
      if (used1[i]) continue;
      let line = [sorted[i]];
      used1[i] = true;

      let changed = true;
      while (changed) {
        changed = false;
        for (let j = 0; j < sorted.length; j++) {
          if (used1[j]) continue;
          for (let k = 0; k < line.length; k++) {
            if (yOverlapRatio(line[k].box, sorted[j].box) >= 0.15 && xCloseEnough(line[k].box, sorted[j].box)) {
              line.push(sorted[j]);
              used1[j] = true;
              changed = true;
              break;
            }
          }
        }
      }
      if (isRTL) {
        line.sort(function(a, b) { return b.box[0][0] - a.box[0][0]; });
      } else {
        line.sort(function(a, b) { return a.box[0][0] - b.box[0][0]; });
      }
      lines.push(line);
    }

    // Phase 2: vertical merge into blocks
    const groups = [];
    const used2 = new Array(lines.length).fill(false);

    for (let i = 0; i < lines.length; i++) {
      if (used2[i]) continue;
      let group = lines[i].slice();
      used2[i] = true;

      let changed = true;
      while (changed) {
        changed = false;
        for (let j = 0; j < lines.length; j++) {
          if (used2[j]) continue;
          for (let k = 0; k < group.length; k++) {
            for (let l = 0; l < lines[j].length; l++) {
              if (xOverlapRatio(group[k].box, lines[j][l].box) >= 0.15 && yCloseEnough(group[k].box, lines[j][l].box)) {
                group = group.concat(lines[j]);
                used2[j] = true;
                changed = true;
                break;
              }
            }
            if (changed) break;
          }
        }
      }
      groups.push(group);
    }

    const merged = groups.map(function(group) {
      if (isVertical) {
        group.sort(function(a, b) { return b.box[0][0] - a.box[0][0]; });
      } else if (isRTL) {
        group.sort(function(a, b) {
          const ya = a.box[0][1], yb = b.box[0][1];
          const ha = Math.abs(a.box[3][1] - a.box[0][1]);
          const hb = Math.abs(b.box[3][1] - b.box[0][1]);
          const minH = Math.min(ha, hb);
          if (Math.abs(ya - yb) < minH * 0.5) return b.box[0][0] - a.box[0][0];
          return ya - yb;
        });
      } else {
        group.sort(function(a, b) {
          const ya = a.box[0][1], yb = b.box[0][1];
          const ha = Math.abs(a.box[3][1] - a.box[0][1]);
          const hb = Math.abs(b.box[3][1] - b.box[0][1]);
          const minH = Math.min(ha, hb);
          if (Math.abs(ya - yb) < minH * 0.5) return a.box[0][0] - b.box[0][0];
          return ya - yb;
        });
      }

      const texts = group.map(function(item) { return item.text; });
      const box = unionBox(group);
      const noSpaceLangs = ['zh', 'ja', 'th'];
      const sep = noSpaceLangs.includes(sourceLang) ? '' : ' ';
      return { text: texts.join(sep), box: box };
    });

    if (isVertical) {
      merged.sort(function(a, b) { return b.box[0][0] - a.box[0][0]; });
    }
    if (isRTL && !isVertical) {
      merged.sort(function(a, b) { return b.box[0][0] - a.box[0][0]; });
    }

    return merged;
  }

  // ==================== YOLO Detection (from page-ocr.js) ====================

  let yoloSession = null;
  let yoloModelUrl = null;
  const INPUT_SIZE_YOLO = 640;
  const YOLO_CONF_THRESHOLD = 0.25;
  const YOLO_NMS_THRESHOLD = 0.45;

  function letterbox(sourceCanvas, targetW, targetH) {
    const srcW = sourceCanvas.width;
    const srcH = sourceCanvas.height;
    const ratio = Math.min(targetW / srcW, targetH / srcH);
    const newW = Math.round(srcW * ratio);
    const newH = Math.round(srcH * ratio);
    const dw = (targetW - newW) / 2;
    const dh = (targetH - newH) / 2;

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#727272';
    ctx.fillRect(0, 0, targetW, targetH);
    ctx.drawImage(sourceCanvas, 0, 0, srcW, srcH, dw, dh, newW, newH);
    return { canvas: canvas, ratio: ratio, dw: dw, dh: dh, srcW: srcW, srcH: srcH };
  }

  function imageDataToNCHW(imageData, mean, std, targetW, targetH) {
    const data = imageData.data;
    const h = targetH || imageData.height;
    const w = targetW || imageData.width;
    const size = h * w;
    const tensorData = new Float32Array(3 * size);
    for (let i = 0; i < size; i++) {
      const r = data[i * 4] / 255.0;
      const g = data[i * 4 + 1] / 255.0;
      const b = data[i * 4 + 2] / 255.0;
      tensorData[i] = (r - mean[0]) / std[0];
      tensorData[size + i] = (g - mean[1]) / std[1];
      tensorData[2 * size + i] = (b - mean[2]) / std[2];
    }
    return tensorData;
  }

  function preprocessYOLO(sourceCanvas) {
    const lb = letterbox(sourceCanvas, INPUT_SIZE_YOLO, INPUT_SIZE_YOLO);
    const ctx = lb.canvas.getContext('2d');
    const inputImageData = ctx.getImageData(0, 0, INPUT_SIZE_YOLO, INPUT_SIZE_YOLO);
    const tensorData = imageDataToNCHW(inputImageData, [0, 0, 0], [1, 1, 1], INPUT_SIZE_YOLO, INPUT_SIZE_YOLO);
    return { tensorData: tensorData, ratio: lb.ratio, dw: lb.dw, dh: lb.dh, srcW: lb.srcW, srcH: lb.srcH };
  }

  function iouBox(boxA, boxB) {
    const xA = Math.max(boxA[0], boxB[0]);
    const yA = Math.max(boxA[1], boxB[1]);
    const xB = Math.min(boxA[2], boxB[2]);
    const yB = Math.min(boxA[3], boxB[3]);
    const interArea = Math.max(0, xB - xA) * Math.max(0, yB - yA);
    if (interArea === 0) return 0;
    const boxAArea = (boxA[2] - boxA[0]) * (boxA[3] - boxA[1]);
    const boxBArea = (boxB[2] - boxB[0]) * (boxB[3] - boxB[1]);
    return interArea / (boxAArea + boxBArea - interArea);
  }

  function applyNMS(detections, iouThreshold) {
    const byClass = {};
    for (let d = 0; d < detections.length; d++) {
      const det = detections[d];
      const cls = det.classId;
      if (!byClass[cls]) byClass[cls] = [];
      byClass[cls].push(det);
    }
    const results = [];
    const classKeys = Object.keys(byClass);
    for (let k = 0; k < classKeys.length; k++) {
      const boxes = byClass[classKeys[k]];
      boxes.sort(function(a, b) { return b.confidence - a.confidence; });
      while (boxes.length > 0) {
        const best = boxes.shift();
        results.push(best);
        for (let i = boxes.length - 1; i >= 0; i--) {
          if (iouBox(best.bbox, boxes[i].bbox) >= iouThreshold) {
            boxes.splice(i, 1);
          }
        }
      }
    }
    return results;
  }

  function scaleYoloCoords(detections, ratio, dw, dh, srcW, srcH) {
    const result = [];
    for (let d = 0; d < detections.length; d++) {
      const det = detections[d];
      const b = det.bbox;
      result.push({
        classId: det.classId,
        confidence: det.confidence,
        bbox: [
          Math.max(0, Math.min(srcW - 1, Math.round((b[0] - dw) / ratio))),
          Math.max(0, Math.min(srcH - 1, Math.round((b[1] - dh) / ratio))),
          Math.max(0, Math.min(srcW - 1, Math.round((b[2] - dw) / ratio))),
          Math.max(0, Math.min(srcH - 1, Math.round((b[3] - dh) / ratio)))
        ]
      });
    }
    return result;
  }

  function postprocessYOLO(outputData, outputDims, ratio, dw, dh, srcW, srcH) {
    let dims, numBoxes;
    if (outputDims.length === 3) {
      dims = outputDims[1];
      numBoxes = outputDims[2];
    } else {
      dims = outputDims[0];
      numBoxes = outputDims[1];
    }
    const numClasses = dims - 4;
    const detections = [];

    for (let i = 0; i < numBoxes; i++) {
      const x = outputData[i];
      const y = outputData[numBoxes + i];
      const w = outputData[2 * numBoxes + i];
      const h = outputData[3 * numBoxes + i];
      let maxScore = -1, maxClass = -1;
      for (let c = 0; c < numClasses; c++) {
        const score = outputData[(4 + c) * numBoxes + i];
        if (score > maxScore) { maxScore = score; maxClass = c; }
      }
      if (maxScore < YOLO_CONF_THRESHOLD) continue;
      if (maxClass === 5) continue;
      const x1 = x - w / 2, y1 = y - h / 2, x2 = x + w / 2, y2 = y + h / 2;
      if (x1 >= x2 || y1 >= y2) continue;
      detections.push({ classId: maxClass, confidence: maxScore, bbox: [x1, y1, x2, y2] });
    }
    const nmsResults = applyNMS(detections, YOLO_NMS_THRESHOLD);
    return scaleYoloCoords(nmsResults, ratio, dw, dh, srcW, srcH);
  }

  async function ensureYOLOModel(yoloUrl) {
    if (yoloSession && yoloModelUrl === yoloUrl) return;
    yoloModelUrl = yoloUrl;
    const sessionOpts = { executionProviders: ['wasm'], graphOptimizationLevel: 'all' };
    yoloSession = await window.ort.InferenceSession.create(yoloUrl, sessionOpts);
  }

  async function runYOLO(sourceCanvas) {
    if (!yoloSession) throw new Error('YOLO model not loaded');
    const prep = preprocessYOLO(sourceCanvas);
    const tensor = new window.ort.Tensor('float32', prep.tensorData, [1, 3, INPUT_SIZE_YOLO, INPUT_SIZE_YOLO]);
    const feeds = {};
    feeds[yoloSession.inputNames[0]] = tensor;
    const outputMap = await yoloSession.run(feeds);
    const output = outputMap[yoloSession.outputNames[0]];
    return postprocessYOLO(output.data, output.dims, prep.ratio, prep.dw, prep.dh, prep.srcW, prep.srcH);
  }

  // ==================== Main OCR Functions ====================

  async function doPaddleOCR(imageDataURL, sourceLang) {
    const Paddle = window['esearch-ocr'];
    const img = new Image();
    img.src = imageDataURL;
    await new Promise(function(resolve) {
      img.onload = resolve;
      img.onerror = function() { resolve(); };
    });

    const result = await Paddle.ocr(img);
    const srcItems = result.src.filter(function(item) {
      return item.text && item.text.trim() !== '';
    });

    // Fix negative coordinates
    srcItems.forEach(function(srcItem) {
      srcItem.box.forEach(function(box) {
        if (box[0] < 0 || box[1] < 0) {
          const x = Math.abs(box[1]);
          const y = Math.abs(box[0]);
          box[0] = x;
          box[1] = y;
        }
      });
    });

    const xSpacing = Settings.get('xSpacing');
    const ySpacing = Settings.get('ySpacing');
    const mergedGroups = mergeTextBoxes(srcItems, sourceLang, xSpacing, ySpacing);

    const boxes = [];
    mergedGroups.forEach(function(group) {
      const b = group.box;
      boxes.push({
        geometry: { X: b[0][0], Y: b[0][1], width: b[2][0] - b[0][0], height: b[2][1] - b[0][1] },
        text: group.text,
        target: ''
      });
    });
    return boxes;
  }

  async function doPaddleOCRYolo(imageDataURL, sourceLang, yoloUrl) {
    const Paddle = window['esearch-ocr'];
    await ensureYOLOModel(yoloUrl);

    const img = new Image();
    img.src = imageDataURL;
    await new Promise(function(resolve) {
      img.onload = resolve;
      img.onerror = function() { resolve(); };
    });

    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const detections = await runYOLO(canvas);
    const srcItems = [];
    for (let i = 0; i < detections.length; i++) {
      try {
        const det = detections[i];
        const b = det.bbox;
        const w = b[2] - b[0], h = b[3] - b[1];
        if (w < 10 || h < 10) continue;
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = w; cropCanvas.height = h;
        const cropCtx = cropCanvas.getContext('2d');
        cropCtx.drawImage(canvas, b[0], b[1], w, h, 0, 0, w, h);
        const recResult = await Paddle.recognize(cropCanvas);
        const text = recResult[0].text;
        srcItems.push({
          text: text.trim(),
          box: [[b[0], b[1]], [b[2], b[1]], [b[2], b[3]], [b[0], b[3]]]
        });
      } catch (e) {
        console.error('Recognize failed for region ' + i, e);
      }
    }

    if (srcItems.length === 0) return [];

    const xSpacing = Settings.get('xSpacing');
    const ySpacing = Settings.get('ySpacing');
    const mergedGroups = mergeTextBoxes(srcItems, sourceLang, xSpacing, ySpacing);

    const boxes = [];
    mergedGroups.forEach(function(group) {
      const b = group.box;
      boxes.push({
        geometry: { X: b[0][0], Y: b[0][1], width: b[2][0] - b[0][0], height: b[2][1] - b[0][1] },
        text: group.text,
        target: ''
      });
    });
    return boxes;
  }

  async function downscaleDataURL(dataURL, maxDimension) {
    return new Promise(function(resolve) {
      const img = new Image();
      img.onload = function() {
        const w = img.naturalWidth, h = img.naturalHeight;
        if (w <= maxDimension && h <= maxDimension) {
          resolve({ dataURL: dataURL, scale: 1 });
          return;
        }
        const ratio = Math.min(maxDimension / w, maxDimension / h);
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(w * ratio);
        canvas.height = Math.round(h * ratio);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve({ dataURL: canvas.toDataURL('image/jpeg', 0.9), scale: ratio });
      };
      img.onerror = function() { resolve({ dataURL: dataURL, scale: 1 }); };
      img.src = dataURL;
    });
  }

  // Main PaddleOCR entry point (from getImage.js)
  async function paddleOCR(imageDataURL, sourceLang, onProgress) {
    await initPaddle(sourceLang, onProgress);

    // Load original image to check dimensions
    const info = await new Promise(function(resolve, reject) {
      const img = new Image();
      img.onload = function() { resolve({ img: img, w: img.naturalWidth, h: img.naturalHeight }); };
      img.onerror = function() { reject(new Error('Failed to load image for OCR')); };
      img.src = imageDataURL;
    });

    const w = info.w, h = info.h;
    const useYOLO = Settings.get('useYOLODetection') ||
      (Settings.get('useYOLOForJapanese') && (sourceLang || 'auto') === 'ja');
    const yoloUrl = 'https://modelscope.cn/models/xulihang/ImageTrans/resolve/master/model.onnx';

    if (h / w <= 4) {
      // Normal case: downscale and OCR, then scale boxes back to original size
      const result = await downscaleDataURL(imageDataURL, 1500);
      const scale = result.scale || 1;
      let boxes;
      if (useYOLO) {
        boxes = await doPaddleOCRYolo(result.dataURL, sourceLang, yoloUrl);
      } else {
        boxes = await doPaddleOCR(result.dataURL, sourceLang);
      }
      if (scale !== 1) {
        boxes.forEach(function(box) {
          box.geometry.X = Math.round(box.geometry.X / scale);
          box.geometry.Y = Math.round(box.geometry.Y / scale);
          box.geometry.width = Math.round(box.geometry.width / scale);
          box.geometry.height = Math.round(box.geometry.height / scale);
        });
      }
      return boxes;
    }

    // Tall image: split into parts
    const img = info.img;
    const partHeight = w * 4;
    const numParts = Math.ceil(h / partHeight);
    const promises = [];
    for (let i = 0; i < numParts; i++) {
      (function(partIndex) {
        const sy = partIndex * partHeight;
        const sh = Math.min(partHeight, h - sy);
        const c = document.createElement('canvas');
        c.width = w; c.height = sh;
        const ctx = c.getContext('2d');
        ctx.drawImage(img, 0, sy, w, sh, 0, 0, w, sh);
        const partDataURL = c.toDataURL('image/jpeg', 0.9);
        promises.push(
          downscaleDataURL(partDataURL, 1500).then(function(result) {
            const scale = result.scale || 1;
            return (useYOLO ? doPaddleOCRYolo(result.dataURL, sourceLang, yoloUrl) : doPaddleOCR(result.dataURL, sourceLang))
              .then(function(boxes) {
                for (let j = 0; j < boxes.length; j++) {
                  // Scale back from downscaled space to original part space
                  if (scale !== 1) {
                    boxes[j].geometry.X = Math.round(boxes[j].geometry.X / scale);
                    boxes[j].geometry.Y = Math.round(boxes[j].geometry.Y / scale);
                    boxes[j].geometry.width = Math.round(boxes[j].geometry.width / scale);
                    boxes[j].geometry.height = Math.round(boxes[j].geometry.height / scale);
                  }
                  // Offset to full-image coordinates
                  boxes[j].geometry.Y += sy;
                }
                return boxes;
              });
          })
        );
      })(i);
    }
    return Promise.all(promises).then(function(results) {
      const allBoxes = [];
      for (let p = 0; p < results.length; p++) {
        allBoxes.push.apply(allBoxes, results[p]);
      }
      return allBoxes;
    });
  }

  return {
    initPaddle: initPaddle,
    paddleOCR: paddleOCR,
    loadDependencies: loadDependencies,
    isDepsLoaded: function() { return depsLoaded; },
    isPaddleReady: function() { return paddleReady; },
    getPaddleLang: function() { return paddleCurrentLang; }
  };
})();
