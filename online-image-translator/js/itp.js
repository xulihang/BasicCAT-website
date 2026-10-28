// ImageTrans Project Export
// Writes a .itp project file (plain JSON) from a translation result, so the
// text can be edited in ImageTrans:
//   - one entry per image, keyed by the image's own file name
//   - one text box per translated box (geometry, source text, target text)
// The image itself is not included: the user already has it, and ImageTrans
// resolves it from the project's dirPath (".").
//
// ImageTrans reads the project with Gson typed conversions,
// e.g. (List) settings.get("textLocalizationProcess") and
// (List) settings.get("fontStyles"), which throw ClassCastException for a
// missing key or a JSON array ([] becomes Object[]). So the "settings" block
// must mirror every key and value type of a project saved by ImageTrans; the
// defaults below come from such a file. Keys this exporter sets explicitly
// (sourceLang, targetLang, ...) are overwritten afterwards.

const ITP = (function() {
  'use strict';

  const SETTINGS_DEFAULT_JSON = '{\n  "minWordLengthForBreak": 99,\n  "StrokeColorDetection": false,\n  "colorDiff": 50,\n  "ProcessAlphaForInpainting": false,\n  "checkColorForSeparationInference": false,\n  "correct_input": true,\n  "long_text_ratio": 8,\n  "overlapped_width_percent": 50,\n  "default_text_box_width": "100",\n  "autocorrect": [],\n  "precisionMode": 0,\n  "output_format": 0,\n  "make_border_for_area_ocr": false,\n  "sourceLang": "zh",\n  "maximumYOffset": "2000",\n  "doNotCheckSeparationWithText": false,\n  "api": "",\n  "use_llm_ocr_for_translation": false,\n  "readSubFolder": true,\n  "char_center_align": "[\\\\!\\\\?\\uff01\\uff1f\\u2049\\u203c\\u2026\\u2014~\\u22ee0-9a-zA-Z]",\n  "panel_sort_criteria": 0,\n  "showTTSButton": true,\n  "tmFiles": [],\n  "auto_invert_for_panel_detection": true,\n  "transliterationFontSize": 24,\n  "balloonModel": "comics",\n  "inferSeparation": true,\n  "char_freeheight": "",\n  "minimumHSpan": "10",\n  "removeBackgroundForSingleLineOCR": false,\n  "resize_before_balloon_height": 1024,\n  "smart_alignment_correction": true,\n  "useBatchSettings": false,\n  "OCR_border_size": 50,\n  "panelObjectDetectionModel": "comics",\n  "reorder_for_area_ocr": false,\n  "GaussianSigmaForFeatheredMat": 0,\n  "InpaintingSlidingWindowOverlapPercent": 5,\n  "enable_bridge_language": false,\n  "useProjectTextForTM": true,\n  "detect_rotation_for_ocr": false,\n  "blurIterationTimes": 1,\n  "blur": false,\n  "checkColorForMerging": true,\n  "resize_before_OCR_min_width": 1024,\n  "fontStyles": [],\n  "right2left": false,\n  "pdf_export_options": "",\n  "bridge_language": "en",\n  "detectTextDirectionOnlyByRatio": true,\n  "expandSmallImageForBalloonDetection": true,\n  "invertBasedOnColor": false,\n  "enable_pdf_import_options": false,\n  "firstchar_to_moveup": "",\n  "CharLevelColorDetection": false,\n  "imgQuality": 90,\n  "rotationDetectionOCRSetting": "",\n  "enableCaseConversionOfSourceForMT": false,\n  "filterRules": "[\\n  {\\n    \\"text\\":\\"\\",\\n    \\"even_number\\": true\\n  },\\n  {\\n    \\"text\\":\\"\\",\\n    \\"even_number\\": false\\n  }\\n]",\n  "do_not_break_words": true,\n  "textLocalizationProcess": [\n    "\\u53bb\\u9664\\u5916\\u90e8\\u533a\\u57df",\n    "\\u6a2a\\u5411\\u5408\\u5e76",\n    "\\u7eb5\\u5411\\u5408\\u5e76",\n    "\\u8fc7\\u6ee4\\u8fc7\\u5c0f\\u9879",\n    "\\u53bb\\u9664\\u5185\\u90e8\\u533a\\u57df",\n    "\\u62d3\\u5c55\\u533a\\u57df"\n  ],\n  "markdown_export_options": "",\n  "remove_with_mask_for_OCR": false,\n  "minimumHeight": "3",\n  "caseConversion": 2,\n  "furiganaStipperMethod": 0,\n  "psd_export_options": "",\n  "mergeOverlappedBoxesForBalloonDetection": false,\n  "char_right_align": "[\\\\.,\\u3002\\uff0c\\u3001\\u3063\\u30c3]",\n  "maximumHeight": "100",\n  "sortBasedOnPanel": true,\n  "char_zerowordspace": "[\\u2014\\u2026]",\n  "convert_vertical_to_horizontal_layout": false,\n  "checkPanelForMerging": true,\n  "char_replace": "{\\n  \\"\\uff08\\":\\"\\ufe35\\",\\n  \\"\\uff09\\":\\"\\ufe36\\",\\n  \\"\\u300c\\":\\"\\ufe41\\",\\n  \\"\\u300d\\":\\"\\ufe42\\",\\n  \\"\\u300e\\":\\"\\ufe43\\",\\n  \\"\\u300f\\":\\"\\ufe44\\"\\n}",\n  "minimumVSpan": "10",\n  "pixelsToExpandForInpaintingByBox": 5,\n  "remove_image_outside_areas_for_appending_text_with_ocr": true,\n  "otsu_enabled": true,\n  "resize_before_balloon": true,\n  "overlapping_percent": 50,\n  "defaultInpainter": "telea",\n  "intermediateResultFolder": "intermediateResults",\n  "threshold": "200",\n  "doNotCheckSeparationForComplexImage": false,\n  "use_puretext": false,\n  "balloon_fixed_ratio": "1x1",\n  "maskRadius": 10,\n  "enable_pdf_export_options": false,\n  "checkParagraphPositionForMerging": false,\n  "use_balloon_detection_model_params_first": true,\n  "maxFontSize": 100,\n  "position_restraint": false,\n  "richtext": false,\n  "checkPunctuationForMerging": false,\n  "getClassIDAsTextStyle": false,\n  "enable_markdown_export_options": false,\n  "char_rotate": "[\\u2026\\u2014~]",\n  "byTextArea": true,\n  "invert": false,\n  "resize_before_OCR": true,\n  "transliterationMethod": 0,\n  "output_with_bitmapcreator": false,\n  "balloon_divide_ratio": 4,\n  "panel_classes_to_convert_to_image": "[\\"image\\",\\"formula\\",\\"chart\\",\\"interline_equation\\"]",\n  "generateMaskDuringSceneTextDetection": false,\n  "flipOutputImage": false,\n  "sortCriteriaForText": 0,\n  "useHighfidelityJPEG": false,\n  "expand": "6",\n  "output_folder": "out",\n  "maximumXOffset": "5000",\n  "useLossLessWebP": false,\n  "rotationDetectionMethod": 0,\n  "expand_for_balloon": false,\n  "use_fixed_ratio_for_balloon": false,\n  "defaultMaskGen": "\\u5185\\u5efa\\u4e8c\\u503c\\u5316\\u65b9\\u6cd5",\n  "inpaintRadius": 3,\n  "offsetThresholdBetweenParagraphLines": 20,\n  "confidence_threshold": 0.5,\n  "timeout": "60",\n  "autoFontSize": true,\n  "endingPunctuations": "[\\\\.,!?\\u3002\\uff01\\uff1f\\u2026\\"]",\n  "batchSettings": {\n    "ocrInterval": 200,\n    "engine": "baidu",\n    "enable_panel_detection": true,\n    "mergeOperation": "2",\n    "detectionMethod": "0",\n    "interval": 1000,\n    "type": "MT"\n  },\n  "pdf_import_options": "",\n  "expanding_pix": 5,\n  "textColorDetectionMethod": 0,\n  "resize_before_OCR_max_width": 2500,\n  "autoThreshold": true,\n  "targetLang": "en",\n  "overlapped_height_percent": 70,\n  "OCRForTextColorDetection": "",\n  "minFontSize": 15,\n  "auto_params": true,\n  "maskGenOCRSetting": "",\n  "cjk_vertical_text_engine": true,\n  "default_text_box_height": "50",\n  "dilation": 2,\n  "autocorrect_enabled": false,\n  "OCR_divide_ratio": 4,\n  "enable_psd_export_options": false,\n  "useSlidingWindowForInpaintingIfSupported": false,\n  "resize": true,\n  "no_punctuation_at_line_start": true,\n  "sortCriteria": 0,\n  "MaxWidthForInpainting": 2048\n}';

  function defaultSettings() {
    return JSON.parse(SETTINGS_DEFAULT_JSON);
  }

  function download(text, filename) {
    const blob = new Blob([text], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
  }

  function baseProject() {
    const sourceLang = Settings.get('sourceLang');
    const targetLang = Settings.get('targetLang');
    const settings = defaultSettings();
    settings.sourceLang = (sourceLang && sourceLang !== 'auto') ? sourceLang : 'zh';
    settings.targetLang = (targetLang && targetLang !== 'auto') ? targetLang : 'en';
    settings.intermediateResultFolder = 'intermediateResults';
    settings.output_folder = 'out';
    return {
      settings: settings,
      images: {},
      UISettings: {
        autosave: true,
        chinesePunc: false,
        dividerPosition: [0.03477218225419664, 0.6139088729016786],
        translateAfterOCR: false,
        vertical: false,
        percent: 30,
        autoClean: true,
        removeSpaces: false,
        precisionMode: true,
        OCRAfterSelection: false,
        autoCapital: false,
        pannable: true,
        textMergingOperationForPanelDetection: 0,
        opacity: 100
      },
      terms: {},
      dirPath: './',
      previousOCR: { engineName: 'rapid', lang: '0' }
    };
  }

  // options: { fileName, boxes, targetLang, filename }
  // Box geometry is already in original-image pixels: the ImageTrans server
  // returns them on the image it was sent, and the local OCR path scales its
  // boxes back up after downscaling.
  function exportITP(options) {
    const fileName = options.fileName || 'image.jpg';
    const boxes = (options.boxes || []).map(function(box) {
      const geo = box.geometry || {};
      return {
        geometry: {
          X: geo.X || geo.x || 0,
          width: geo.width || geo.Width || 0,
          Y: geo.Y || geo.y || 0,
          height: geo.height || geo.Height || 0
        },
        text: box.source || box.text || '',
        target: box.target
      };
    }).filter(function(box) {
      return box.target && box.geometry.width > 0 && box.geometry.height > 0;
    });
    if (!boxes.length) throw new Error('No text boxes to export.');

    const project = baseProject();
    if (options.targetLang) project.settings.targetLang = options.targetLang;
    project.images[fileName] = { boxes: boxes };

    const imageBaseName = fileName.replace(/\.[^.]+$/, '');
    download(JSON.stringify(project, null, 4), options.filename || imageBaseName + '.itp');
  }

  return {
    export: exportITP
  };
})();
