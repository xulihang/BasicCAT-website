// Settings Manager - mirrors Chrome extension's options.js defaults
// Uses localStorage for persistence

const DEFAULT_OPENAI_PROMPT = `Translate the following texts from {sourceLang} to {targetLang}. Return ONLY a JSON array of translated strings in the same order (no markdown, no code fences).
Texts: {texts}`;

const DEFAULTS = {
  serverURL: 'https://service.basiccat.org:51043',
  pickingWay: '1',
  useCanvas: true,
  useCORS: true,
  renderTextInFrontend: false,
  screenCaptureOverlay: false,
  renderTextCSS: 'text-align: center;\nborder-radius: 10%;',
  displayName: '',
  password: '',
  sourceLang: 'auto',
  targetLang: 'auto',
  useOpenAI: false,
  openaiURL: 'https://api.openai.com/v1',
  openaiKey: '',
  openaiModel: 'gpt-4o',
  openaiPrompt: DEFAULT_OPENAI_PROMPT,
  ocrMethod: 'paddleocr',
  translationMode: 'imagetrans',
  defaultPresetTranslation: 'mymemory',
  useYOLODetection: false,
  useYOLOForJapanese: true,
  xSpacing: 15,
  ySpacing: 15,
  sendRequestsViaBackground: false,
  addPinyinToSource: false,
  addFuriganaToSource: false,
  showFloatingButton: false,
  uiLanguage: '',
  // Online translator specific
  engine: 'imagetrans',
  paddleOCRLang: 'chs',
  useTargetImage: false,
  renderTranslation: true,
  template: 'general',
  chatGPTURL: '',
  chatGPTAPIKEY: '',
  chatGPTModel: '',
  tts: '',
  region: { left: 20, right: 80, top: 20, bottom: 60 }
};

let _listeners = {};

const Settings = {
  _cache: {},

  init() {
    this._cache = {};
    for (const key in DEFAULTS) {
      if (!Object.prototype.hasOwnProperty.call(DEFAULTS, key)) continue;
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        try {
          this._cache[key] = JSON.parse(raw);
        } catch (e) {
          this._cache[key] = raw;
        }
      } else {
        this._cache[key] = DEFAULTS[key];
      }
    }
    // Special: region is stored as JSON
    const regionRaw = localStorage.getItem('region');
    if (regionRaw) {
      try {
        this._cache['region'] = JSON.parse(regionRaw);
      } catch (e) {
        this._cache['region'] = DEFAULTS['region'];
      }
    }
    // If useOpenAI is true, force renderTextInFrontend
    if (this._cache.useOpenAI) {
      this._cache.renderTextInFrontend = true;
    }
  },

  get(key) {
    if (key in this._cache) return this._cache[key];
    return DEFAULTS[key];
  },

  set(key, value) {
    this._cache[key] = value;
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
    // Special handling
    if (key === 'useOpenAI' && value) {
      this._cache.renderTextInFrontend = true;
    }
    // Notify listeners
    if (_listeners[key]) {
      _listeners[key].forEach(function(fn) { fn(value); });
    }
  },

  setMultiple(obj) {
    for (const k in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, k)) continue;
      this.set(k, obj[k]);
    }
  },

  saveAll(formData) {
    for (const key in DEFAULTS) {
      if (!Object.prototype.hasOwnProperty.call(DEFAULTS, key)) continue;
      if (key in formData) {
        this.set(key, formData[key]);
      }
    }
    if (this._cache.useOpenAI) {
      this.set('renderTextInFrontend', true);
    }
  },

  onChange(key, fn) {
    if (!_listeners[key]) _listeners[key] = [];
    _listeners[key].push(fn);
  },

  getAll() {
    const result = {};
    for (const key in DEFAULTS) {
      if (!Object.prototype.hasOwnProperty.call(DEFAULTS, key)) continue;
      result[key] = this.get(key);
    }
    return result;
  }
};

// i18n - simple text definitions
const I18N = {
  en: {
    tab_translate: 'Translate',
    tab_scan: 'Scan',
    tab_settings: 'Settings',
    tab_viewer: 'Viewer',
    translate_btn: 'Translate',
    show_translated: 'Translated',
    select_image: 'Select Image',
    drop_hint: 'or drag & drop an image here',
    translating: 'Translating...',
    ocring: 'Recognizing text...',
    init_ocr: 'Initializing OCR engine...',
    translating_text: 'Translating text...',
    no_text: 'No text detected in the image.',
    error_server: 'Failed to connect to translation server.',
    error_ocr: 'OCR failed.',
    settings_saved: 'Settings saved.',
    settings_title: 'Settings',
    settings_translation: 'Translation',
    settings_translation_mode: 'Translation Mode',
    settings_mode_imagetrans: 'ImageTrans (local or remote server)',
    settings_mode_local: 'Local PaddleOCR + Free Translation or OpenAI',
    settings_default_preset: 'Default Preset Translation',
    settings_preset_mymemory: 'MyMemory',
    settings_source_lang: 'Source lang',
    settings_target_lang: 'Target lang',
    settings_server: 'Server Connection',
    settings_server_url: 'Server URL',
    settings_public_server: 'Use public server',
    settings_local_server: 'Use local server',
    settings_display_name: 'Instance display name',
    settings_password: 'Password (optional)',
    settings_check_instances: 'Check existing instances',
    settings_rendering: 'Image Capture and Rendering',
    settings_render_frontend: 'Render text in the front-end',
    settings_font_css: 'Font CSS (for front-end rendering)',
    settings_openai: 'OpenAI-Compatible API (optional)',
    settings_enable_openai: 'Enable OpenAI-compatible API',
    settings_ocr_method: 'OCR method',
    settings_ocr_paddleocr: 'PaddleOCR (local)',
    settings_ocr_imagetrans: 'ImageTrans',
    settings_api_url: 'API URL',
    settings_api_key: 'API Key',
    settings_model: 'Model',
    settings_prompt: 'Prompt',
    settings_image_processing: 'Image Processing (for PaddleOCR)',
    settings_x_spacing: 'X spacing (px)',
    settings_y_spacing: 'Y spacing (px)',
    settings_use_yolo: 'Use YOLO for text detection',
    settings_use_yolo_jp: 'Use YOLO for Japanese',
    settings_ui_lang: 'Interface Language',
    settings_save: 'Save Settings',
    settings_langpair_hint: 'You need to specify the language pair when using the public server or PaddleOCR.',
    scan_capture_btn: 'Capture',
    scan_gallery: 'Load Image',
    scan_processing: 'Processing...',
    scan_new_region: 'New Region',
    scan_title: 'OCR & Translation',
    scan_close: 'Close',
    scan_copy: 'Copy',
    scan_copied: 'Copied',
    scan_speak: 'Speak',
    scan_stop: 'Stop',
    scan_voice_engine: 'Voice Engine',
    scan_no_text: 'No text detected.',
    source_text: 'Source',
    target_text: 'Translation',
    close: 'Close',
    new_region: 'New Region',
    recognize: 'Recognize',
    server_failed: 'Failed to connect to server. Check the URL or try local mode.',
    alert_set_langpair: 'Please set the source and target languages in Settings first. Auto-detect is not supported — select specific languages like Japanese → English.',
    overlay_translating: 'Translating...',
    css_presets: 'CSS Presets',
    css_default: 'Default',
    css_center: 'Center Align',
    css_center_bold: 'Center + Bold',
    css_rounded: 'Rounded + Center',
    css_uppercase: 'Uppercase + Center',
    css_rounded_uppercase: 'Rounded + Uppercase',
    options_ui_lang_default: 'Browser Default',
    options_ui_lang_en: 'English',
    options_ui_lang_zh: '中文',
    upload_image: 'Click to upload or drag & drop',
    text_detail: 'Text Detail',
    camera_start: 'Open Camera',
    camera_stop: 'Close Camera',
    camera_switch: 'Switch Camera',
    engine_label: 'Engine',
    engine_imagetrans: 'ImageTrans',
    engine_paddle: 'PaddleOCR',
  },
  zh: {
    tab_translate: '翻译',
    tab_scan: '扫描',
    tab_settings: '设置',
    tab_viewer: '浏览',
    translate_btn: '翻译',
    show_translated: '显示译文',
    select_image: '选择图片',
    drop_hint: '或拖放图片到这里',
    translating: '翻译中...',
    ocring: '文字识别中...',
    init_ocr: '初始化OCR引擎...',
    translating_text: '翻译文字中...',
    no_text: '图片中未检测到文字。',
    error_server: '无法连接到翻译服务器。',
    error_ocr: 'OCR识别失败。',
    settings_saved: '设置已保存。',
    settings_title: '设置',
    settings_translation: '翻译',
    settings_translation_mode: '翻译模式',
    settings_mode_imagetrans: 'ImageTrans (本地或远程服务器)',
    settings_mode_local: '本地PaddleOCR + 免费翻译或OpenAI',
    settings_default_preset: '默认翻译预设',
    settings_preset_mymemory: 'MyMemory',
    settings_source_lang: '源语言',
    settings_target_lang: '目标语言',
    settings_server: '服务器连接',
    settings_server_url: '服务器URL',
    settings_public_server: '使用公共服务器',
    settings_local_server: '使用本地服务器',
    settings_display_name: '实例显示名称',
    settings_password: '密码（可选）',
    settings_check_instances: '检查已有实例',
    settings_rendering: '图片捕捉和渲染',
    settings_render_frontend: '在前端渲染文字',
    settings_font_css: '字体CSS（用于前端渲染）',
    settings_openai: 'OpenAI兼容API（可选）',
    settings_enable_openai: '启用OpenAI兼容API',
    settings_ocr_method: 'OCR方法',
    settings_ocr_paddleocr: 'PaddleOCR（本地）',
    settings_ocr_imagetrans: 'ImageTrans',
    settings_api_url: 'API URL',
    settings_api_key: 'API Key',
    settings_model: '模型',
    settings_prompt: '提示词',
    settings_image_processing: '图片处理（用于PaddleOCR）',
    settings_x_spacing: 'X间距（px）',
    settings_y_spacing: 'Y间距（px）',
    settings_use_yolo: '使用YOLO检测文字',
    settings_use_yolo_jp: '日语使用YOLO检测',
    settings_ui_lang: '界面语言',
    settings_save: '保存设置',
    settings_langpair_hint: '使用公共服务器或PaddleOCR时需要指定语言对。',
    scan_capture_btn: '拍照',
    scan_gallery: '加载图片',
    scan_processing: '处理中...',
    scan_new_region: '新区域',
    scan_title: 'OCR和翻译',
    scan_close: '关闭',
    scan_copy: '复制',
    scan_copied: '已复制',
    scan_speak: '朗读',
    scan_stop: '停止',
    scan_voice_engine: '语音引擎',
    scan_no_text: '未检测到文字。',
    source_text: '原文',
    target_text: '译文',
    close: '关闭',
    new_region: '新区域',
    recognize: '识别',
    server_failed: '连接服务器失败。请检查URL或尝试本地模式。',
    alert_set_langpair: '请先在设置中指定源语言和目标语言。不支持自动检测，请选择具体的语言对，如日语→英语。',
    overlay_translating: '翻译中...',
    css_presets: 'CSS预设',
    css_default: '默认',
    css_center: '居中',
    css_center_bold: '居中+粗体',
    css_rounded: '圆角+居中',
    css_uppercase: '大写+居中',
    css_rounded_uppercase: '圆角+大写',
    options_ui_lang_default: '浏览器默认',
    options_ui_lang_en: 'English',
    options_ui_lang_zh: '中文',
    upload_image: '点击上传或拖放图片',
    text_detail: '文字详情',
    camera_start: '打开相机',
    camera_stop: '关闭相机',
    camera_switch: '切换相机',
    engine_label: '引擎',
    engine_imagetrans: 'ImageTrans',
    engine_paddle: 'PaddleOCR',
  }
};

function t(key) {
  const lang = Settings.get('uiLanguage') === 'zh_CN' ? 'zh' : 'en';
  const dict = I18N[lang] || I18N['en'];
  return dict[key] || key;
}

// Language codes for select dropdowns
const LANGUAGE_CODES = [
  {name: 'Arabic', code: 'ar'},
  {name: 'English', code: 'en'},
  {name: 'Chinese', code: 'zh'},
  {name: 'Japanese', code: 'ja'},
  {name: 'Korean', code: 'ko'},
  {name: 'French', code: 'fr'},
  {name: 'Italian', code: 'it'},
  {name: 'Spanish', code: 'es'},
  {name: 'Russian', code: 'ru'},
  {name: 'Portuguese', code: 'pt'},
  {name: 'Indonesian', code: 'id'},
  {name: 'Vietnamese', code: 'vi'},
  {name: 'Thai', code: 'th'},
  {name: 'Malay', code: 'ms'},
  {name: 'Auto', code: 'auto'}
];

// PaddleOCR language options
const PADDLE_LANGS = [
  {name: 'Chinese + English', code: 'chs'},
  {name: 'English', code: 'en'},
  {name: 'Japanese', code: 'ja'},
  {name: 'Korean', code: 'ko'},
  {name: 'Chinese Traditional', code: 'cht'}
];

// Initialize settings on load
Settings.init();
