// Translation Engines - ImageTrans server, MyMemory, GLM-4-Flash, OpenAI
// Ported from Chrome extension's getImage.js and background.js

const Translate = (function() {
  'use strict';

  function reflowText(sourceLang, source) {
    if (sourceLang === 'ja' || sourceLang === 'zh') {
      return source.replace(/\n/g, '');
    }
    return source.replace(/\n/g, ' ');
  }

  // ==================== ImageTrans Server ====================

  async function translateViaImageTrans(imageDataURL, boxes, options) {
    const serverURL = options.serverURL || Settings.get('serverURL');
    const displayName = options.displayName || Settings.get('displayName') || 'default';
    const password = options.password || Settings.get('password');
    const sourceLang = options.sourceLang || Settings.get('sourceLang');
    const targetLang = options.targetLang || Settings.get('targetLang');
    const renderTextInFrontend = options.renderTextInFrontend !== undefined ?
      options.renderTextInFrontend : Settings.get('renderTextInFrontend');
    const headless = options.headless !== undefined ? options.headless : true;

    const data = { src: imageDataURL, saveToFile: 'true' };
    if (sourceLang !== 'auto') data.sourceLang = sourceLang;
    if (targetLang !== 'auto') data.targetLang = targetLang;
    data.displayName = displayName;
    data.password = password;
    data.headless = headless ? 'true' : 'false';
    if (renderTextInFrontend) {
      data.withoutImage = 'true';
    }

    // If using OpenAI with ImageTrans, pass API config
    if (Settings.get('useOpenAI')) {
      const chatGPTURL = Settings.get('chatGPTURL') || Settings.get('openaiURL');
      const chatGPTAPIKEY = Settings.get('chatGPTAPIKEY') || Settings.get('openaiKey');
      const chatGPTModel = Settings.get('chatGPTModel') || Settings.get('openaiModel');
      if (chatGPTAPIKEY && chatGPTURL && chatGPTModel) {
        data.apis = JSON.stringify({
          chatGPT: { host: chatGPTURL, key: chatGPTAPIKEY, model: chatGPTModel }
        });
      }
    }

    const template = Settings.get('template');
    if (template && template !== 'general') {
      data.template = template;
    }

    const params = new URLSearchParams();
    for (const k in data) {
      if (!Object.prototype.hasOwnProperty.call(data, k)) continue;
      if (data[k] === undefined || data[k] === null) continue;
      params.append(k, data[k]);
    }

    const resp = await fetch(serverURL + '/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: params.toString(),
      cache: 'no-store'
    });

    if (!resp.ok) {
      throw new Error('ImageTrans server error: HTTP ' + resp.status);
    }

    const respData = await resp.json();

    if (respData.success === false) {
      throw new Error(respData.message || 'ImageTrans server returned error');
    }

    let resultBoxes = boxes;
    let translatedImage = null;

    if (respData.imgMap && respData.imgMap.boxes) {
      resultBoxes = respData.imgMap.boxes;
    }
    if (respData.img) {
      translatedImage = 'data:image/jpeg;base64,' + respData.img;
    }

    return { boxes: resultBoxes, translatedImage: translatedImage };
  }

  async function translateRegionViaImageTrans(imageDataURL, options) {
    const serverURL = options.serverURL || Settings.get('serverURL');
    const displayName = options.displayName || Settings.get('displayName') || 'default';
    const password = options.password || Settings.get('password');
    const sourceLang = options.sourceLang || Settings.get('sourceLang');
    const targetLang = options.targetLang || Settings.get('targetLang');

    const params = new URLSearchParams();
    params.append('base64', imageDataURL);
    params.append('displayName', displayName);
    params.append('password', password);
    if (sourceLang !== 'auto') params.append('sourceLang', sourceLang);
    if (targetLang !== 'auto') params.append('targetLang', targetLang);

    const resp = await fetch(serverURL + '/translateRegion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: params.toString(),
      cache: 'no-store'
    });

    if (!resp.ok) {
      throw new Error('ImageTrans server error: HTTP ' + resp.status);
    }

    return resp.json();
  }

  // ==================== MyMemory (Free Translation) ====================

  async function translateUsingMyMemory(source, sourceLang, targetLang) {
    try {
      const sl = (sourceLang === 'auto' || !sourceLang) ? 'ja' : sourceLang;
      const tl = (targetLang === 'auto' || !targetLang) ? 'en' : targetLang;
      const text = reflowText(sl, source);
      let url = 'https://api.mymemory.translated.net/get?';
      url += 'q=' + encodeURIComponent(text);
      url += '&langpair=' + sl + '|' + tl;
      const response = await fetch(url);
      const o = await response.json();
      return o.responseData.translatedText;
    } catch (error) {
      console.error('MyMemory translation error:', error);
      return '';
    }
  }

  async function translateBatchViaMyMemory(sourceTexts, sourceLang, targetLang) {
    const promises = sourceTexts.map(function(text) {
      if (text) return translateUsingMyMemory(text, sourceLang, targetLang);
      return Promise.resolve('');
    });
    return Promise.all(promises);
  }

  // ==================== OpenAI-Compatible API ====================

  async function translateViaOpenAI(sourceTexts, sourceLang, targetLang) {
    const openaiURL = Settings.get('openaiURL');
    const openaiKey = Settings.get('openaiKey');
    const openaiModel = Settings.get('openaiModel');
    let openaiPrompt = Settings.get('openaiPrompt');

    if (!openaiURL || !openaiKey) {
      throw new Error('OpenAI API URL or Key is not configured');
    }

    const actualTargetLang = (targetLang === 'auto' || !targetLang) ? 'English' : targetLang;
    const prompt = openaiPrompt
      .replace(/\{sourceLang\}/g, sourceLang || 'auto')
      .replace(/\{targetLang\}/g, actualTargetLang)
      .replace(/\{texts\}/g, JSON.stringify(sourceTexts));

    const apiUrl = openaiURL.replace(/\/+$/, '') + '/chat/completions';

    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + openaiKey
      },
      body: JSON.stringify({
        model: openaiModel,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error('OpenAI API error HTTP ' + resp.status + ': ' + errText);
    }

    const result = await resp.json();
    const content = result.choices[0].message.content;

    let translatedTexts;
    try {
      translatedTexts = JSON.parse(content);
    } catch (e) {
      const match = content.match(/```(?:json)?\s*([\s\S]*?)```/);
      if (match) {
        translatedTexts = JSON.parse(match[1]);
      } else {
        throw new Error('Failed to parse translation response as JSON. Response: ' + content.substring(0, 200));
      }
    }

    if (!Array.isArray(translatedTexts)) {
      if (translatedTexts && translatedTexts.translations) {
        translatedTexts = translatedTexts.translations;
      } else if (translatedTexts && translatedTexts.texts) {
        translatedTexts = translatedTexts.texts;
      } else {
        return sourceTexts.map(function() { return ''; });
      }
    }

    return translatedTexts;
  }

  // ==================== Complete Translation Pipeline ====================

  // Translate an entire image - uses the configured engine
  async function translateImage(imageDataURL, options) {
    options = options || {};
    const translationMode = options.translationMode || Settings.get('translationMode');
    const useOpenAI = options.useOpenAI !== undefined ? options.useOpenAI : Settings.get('useOpenAI');
    const sourceLang = options.sourceLang || Settings.get('sourceLang');
    const targetLang = options.targetLang || Settings.get('targetLang');
    const ocrMethod = options.ocrMethod || Settings.get('ocrMethod');

    if (useOpenAI) {
      return translateImageViaOpenAI(imageDataURL, options);
    }

    if (translationMode === 'local') {
      return translateImageViaLocal(imageDataURL, options);
    }

    // Default: ImageTrans server
    return translateImageViaServer(imageDataURL, options);
  }

  async function translateImageViaServer(imageDataURL, options) {
    const sourceLang = options.sourceLang || Settings.get('sourceLang');
    const targetLang = options.targetLang || Settings.get('targetLang');
    const serverURL = options.serverURL || Settings.get('serverURL');

    // Check if using public server with auto languages
    if (serverURL.indexOf('https://service.basiccat.org:51043') !== -1) {
      if (!sourceLang || !targetLang || sourceLang === 'auto' || targetLang === 'auto') {
        throw new Error('LANGPAIR_REQUIRED');
      }
    }

    const result = await translateViaImageTrans(imageDataURL, [], options);
    const boxes = result.boxes;
    const translatedImage = result.translatedImage;
    const renderTextInFrontend = options.renderTextInFrontend !== undefined ?
      options.renderTextInFrontend : Settings.get('renderTextInFrontend');

    return { boxes: boxes, translatedImage: translatedImage, renderTextInFrontend: renderTextInFrontend };
  }

  async function translateImageViaLocal(imageDataURL, options) {
    const sourceLang = options.sourceLang || Settings.get('sourceLang');
    const targetLang = options.targetLang || Settings.get('targetLang');
    const defaultPreset = options.defaultPresetTranslation || Settings.get('defaultPresetTranslation');
    const useOpenAI = options.useOpenAI !== undefined ? options.useOpenAI : Settings.get('useOpenAI');

    if (sourceLang === 'auto' || targetLang === 'auto') {
      throw new Error('LANGPAIR_REQUIRED');
    }

    // Step 1: Run PaddleOCR locally
    let boxes = await OCR.paddleOCR(imageDataURL, sourceLang, options.onProgress);

    // Step 2: Extract source texts
    const sourceTexts = boxes.map(function(b) { return b.text || b.source || ''; });
    if (sourceTexts.length === 0 || sourceTexts.every(function(t) { return !t; })) {
      return { boxes: boxes, translatedImage: null, renderTextInFrontend: true, noText: true };
    }

    // Step 3: Translate
    let translations;
    if (useOpenAI) {
      translations = await translateViaOpenAI(sourceTexts, sourceLang, targetLang);
    } else {
      translations = await translateBatchViaMyMemory(sourceTexts, sourceLang, targetLang);
    }

    // Step 4: Map translations back
    for (let i = 0; i < boxes.length && i < translations.length; i++) {
      boxes[i].target = translations[i] || '';
    }

    return { boxes: boxes, translatedImage: null, renderTextInFrontend: true };
  }

  async function translateImageViaOpenAI(imageDataURL, options) {
    const sourceLang = options.sourceLang || Settings.get('sourceLang');
    const targetLang = options.targetLang || Settings.get('targetLang');
    const ocrMethod = options.ocrMethod || Settings.get('ocrMethod');

    // Step 1: OCR
    let boxes;
    if (ocrMethod === 'paddleocr') {
      if (sourceLang === 'auto') {
        throw new Error('LANGPAIR_REQUIRED');
      }
      boxes = await OCR.paddleOCR(imageDataURL, sourceLang, options.onProgress);
    } else {
      // Use ImageTrans for OCR
      const result = await translateViaImageTrans(imageDataURL, [], Object.assign({}, options, {
        renderTextInFrontend: true,
        headless: true
      }));
      boxes = result.boxes;
    }

    // Step 2: Extract source texts
    const sourceTexts = boxes.map(function(b) { return b.source || b.text || b.target || ''; });
    if (sourceTexts.length === 0 || sourceTexts.every(function(t) { return !t; })) {
      return { boxes: boxes, translatedImage: null, renderTextInFrontend: true, noText: true };
    }

    // Step 3: Translate via OpenAI
    const translations = await translateViaOpenAI(sourceTexts, sourceLang, targetLang);

    // Step 4: Map translations back
    for (let i = 0; i < boxes.length && i < translations.length; i++) {
      boxes[i].target = translations[i];
    }

    return { boxes: boxes, translatedImage: null, renderTextInFrontend: true };
  }

  // Translate region (for scan mode)
  async function translateRegion(imageDataURL, options) {
    options = options || {};
    const translationMode = options.translationMode || Settings.get('translationMode');
    const useOpenAI = options.useOpenAI !== undefined ? options.useOpenAI : Settings.get('useOpenAI');
    const sourceLang = options.sourceLang || Settings.get('sourceLang');
    const targetLang = options.targetLang || Settings.get('targetLang');

    if (translationMode === 'imagetrans' && !useOpenAI) {
      const result = await translateRegionViaImageTrans(imageDataURL, options);
      return { regionMap: result.regionMap };
    }

    // Local OCR + translation
    let boxes;
    if (translationMode === 'imagetrans' && useOpenAI) {
      // OCR via ImageTrans
      const ocrResult = await translateViaImageTrans(imageDataURL, [], Object.assign({}, options, {
        renderTextInFrontend: true, headless: true
      }));
      boxes = ocrResult.boxes;
    } else {
      boxes = await OCR.paddleOCR(imageDataURL, sourceLang, options.onProgress);
    }

    if (boxes.length === 0) {
      return { regionMap: { source: '', target: [] } };
    }

    const firstBox = boxes[0];
    const sourceText = firstBox.text || firstBox.source || '';
    let targetText = '';

    if (useOpenAI) {
      const translations = await translateViaOpenAI([sourceText], sourceLang, targetLang);
      targetText = translations[0] || '';
    } else {
      targetText = await translateUsingMyMemory(sourceText, sourceLang, targetLang);
    }

    return {
      regionMap: {
        source: sourceText,
        target: [{ engine: useOpenAI ? 'openai' : 'mymemory', text: targetText }]
      }
    };
  }

  return {
    reflowText: reflowText,
    translateViaImageTrans: translateViaImageTrans,
    translateRegionViaImageTrans: translateRegionViaImageTrans,
    translateUsingMyMemory: translateUsingMyMemory,
    translateBatchViaMyMemory: translateBatchViaMyMemory,
    translateViaOpenAI: translateViaOpenAI,
    translateImage: translateImage,
    translateRegion: translateRegion
  };
})();
