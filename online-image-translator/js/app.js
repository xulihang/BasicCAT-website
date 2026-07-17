// Main Application Shell
// Tab navigation, UI management, and integration of all modules

(function() {
  'use strict';

  // ==================== DOM References ====================
  const $ = function(s) { return document.querySelector(s); };
  const $$ = function(s) { return document.querySelectorAll(s); };

  // Tabs
  const tabButtons = {};
  const tabPanels = {};

  // Translate tab
  let translateImgSource = null;
  let translateImgTarget = null;
  let translateFileInput = null;
  let translateDropZone = null;
  let translateBtn = null;
  let translateShowChk = null;
  let translateContainer = null;
  let translateOverlay = null;
  let translateBoxes = [];
  let translateScale = 1.0;
  let translateOriginalDataURL = null;

  // Scan tab
  let scanResults = null;
  let scanFileInput = null;
  // Scan fullscreen overlay
  let scanFullscreen = null;
  let scanFSImage = null;
  let scanFSVideo = null;
  let scanSelectionBox = null;
  let scanStream = null;
  let scanCameras = [];
  let scanCurrentCamera = null;
  let scanCameraSelect = null;
  let scanRect = null;
  let scanHandles = [];
  let scanDragging = false;
  let scanResizing = false;
  let scanResizeCorner = null;
  let scanDragStartX = 0, scanDragStartY = 0;
  let scanDragOrigLeft = 0, scanDragOrigTop = 0;
  let scanResizeAnchorX = 0, scanResizeAnchorY = 0;
  let scanMode = 'camera'; // 'camera' or 'image'
  let scanFSImageData = null;

  // Settings tab
  let settingsForm = null;

  // Shared
  let statusMask = null;
  let statusText = null;
  let textModal = null;

  // ==================== Initialization ====================

  function init() {
    // Cache DOM
    cacheDOMElements();
    // Set up tabs
    setupTabs();
    // Set up Translate tab
    setupTranslateTab();
    // Set up Scan tab
    setupScanTab();
    // Set up Settings tab
    setupSettingsTab();
    // Set up text modal
    setupTextModal();
    // Set up status mask
    setupStatusMask();
    // Apply UI language
    applyI18n();

    // Show first-run setup if not completed
    if (!localStorage.getItem('imagetrans_setup_done')) {
      showSetupModal();
    } else {
      switchTab('translate');
    }
  }

  function cacheDOMElements() {
    // Tab buttons
    ['translate', 'scan', 'settings'].forEach(function(id) {
      tabButtons[id] = $('#tab-' + id);
    });
    // Tab panels
    ['translate', 'scan', 'settings'].forEach(function(id) {
      tabPanels[id] = $('#panel-' + id);
    });

    // Translate
    translateImgSource = $('#img-source');
    translateImgTarget = $('#img-target');
    translateFileInput = $('#translate-file-input');
    translateDropZone = $('#translate-drop-zone');
    translateBtn = $('#btn-translate');
    translateShowChk = $('#chk-show-translated');
    translateContainer = $('#translate-image-container');
    translateOverlay = $('#translate-text-overlay');

    // Scan
    scanResults = $('#scan-results');
    scanFileInput = $('#scan-file-input');
    scanFullscreen = $('#scan-fullscreen');
    scanFSImage = $('#scan-fs-image');
    scanFSVideo = $('#scan-fs-video');
    scanSelectionBox = $('#scan-selection-box');
    scanCameraSelect = $('#scan-fs-camera-select');

    // Settings
    settingsForm = $('#settings-form');

    // Shared
    statusMask = $('#status-mask');
    statusText = $('#status-text');
    textModal = $('#text-modal');
  }

  // ==================== Tab Navigation ====================

  function setupTabs() {
    Object.keys(tabButtons).forEach(function(tabId) {
      tabButtons[tabId].addEventListener('click', function() {
        switchTab(tabId);
      });
    });
  }

  // Dynamic page titles per language
  var PAGE_TITLES = {
    en: {
      translate: 'Online Image Translator — Translate Comics, Manga & Images',
      scan: 'Camera Translate — Online Image Translator',
      settings: 'Settings — Online Image Translator'
    },
    zh: {
      translate: '在线图片翻译器 — 漫画翻译、拍照翻译',
      scan: '拍照翻译 — 在线图片翻译器',
      settings: '设置 — 在线图片翻译器'
    }
  };

  function switchTab(tabId) {
    // Update buttons
    Object.keys(tabButtons).forEach(function(id) {
      tabButtons[id].classList.toggle('active', id === tabId);
    });
    // Update panels
    Object.keys(tabPanels).forEach(function(id) {
      tabPanels[id].classList.toggle('hidden', id !== tabId);
    });
    // Update page title
    updatePageTitle(tabId);
  }

  function updatePageTitle(tabId) {
    var uiLang = Settings.get('uiLanguage') || '';
    var langKey = uiLang === 'zh_CN' ? 'zh' : 'en';
    var titles = PAGE_TITLES[langKey] || PAGE_TITLES['en'];
    if (titles[tabId]) {
      document.title = titles[tabId];
    }
  }

  // Wait for an image to finish loading and browser to complete layout
  function waitForImageLayout(img) {
    return new Promise(function(resolve) {
      if (img.complete && img.naturalWidth > 0) {
        // Image already loaded, wait one frame for layout
        requestAnimationFrame(function() {
          requestAnimationFrame(resolve);
        });
      } else {
        img.onload = function() {
          requestAnimationFrame(function() {
            requestAnimationFrame(resolve);
          });
        };
        img.onerror = resolve;
      }
    });
  }

  // ==================== First-run Setup Modal ====================

  function showSetupModal() {
    const modal = $('#setup-modal');
    if (!modal) return;
    modal.style.display = 'flex';

    // Populate language selects
    const srcSelect = $('#setup-sourceLang');
    const tgtSelect = $('#setup-targetLang');
    [srcSelect, tgtSelect].forEach(function(sel) {
      if (!sel) return;
      sel.innerHTML = '';
      LANGUAGE_CODES.forEach(function(lang) {
        if (lang.code === 'auto') return; // no auto in setup
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = lang.name;
        sel.appendChild(opt);
      });
    });
    if (srcSelect) setSelectValue(srcSelect, 'ja');
    if (tgtSelect) setSelectValue(tgtSelect, 'en');

    // Server URL field
    const serverInput = $('#setup-serverURL');
    if (serverInput) serverInput.value = Settings.get('serverURL');

    // Mode selection visuals
    const optServer = $('#setup-opt-server');
    const optLocal = $('#setup-opt-local');
    const serverSection = $('#setup-server-section');

    function updateModeUI() {
      const mode = document.querySelector('input[name="setup-mode"]:checked');
      if (!mode) return;
      if (optServer) optServer.classList.toggle('selected', mode.value === 'imagetrans');
      if (optLocal) optLocal.classList.toggle('selected', mode.value === 'local');
      if (serverSection) serverSection.style.display = mode.value === 'imagetrans' ? '' : 'none';
    }

    if (optServer) optServer.addEventListener('click', function() {
      document.querySelector('input[value="imagetrans"]').checked = true;
      updateModeUI();
    });
    if (optLocal) optLocal.addEventListener('click', function() {
      document.querySelector('input[value="local"]').checked = true;
      updateModeUI();
    });
    updateModeUI();

    // Get Started
    const startBtn = $('#btn-setup-start');
    if (startBtn) {
      startBtn.onclick = function() {
        const mode = document.querySelector('input[name="setup-mode"]:checked');
        Settings.set('translationMode', mode ? mode.value : 'imagetrans');
        Settings.set('renderTextInFrontend', mode && mode.value === 'local');
        if (srcSelect) Settings.set('sourceLang', srcSelect.value);
        if (tgtSelect) Settings.set('targetLang', tgtSelect.value);
        if (serverInput && serverInput.value) Settings.set('serverURL', serverInput.value);
        localStorage.setItem('imagetrans_setup_done', '1');
        modal.style.display = 'none';
        switchTab('translate');
      };
    }

    // Skip
    const skipBtn = $('#btn-setup-skip');
    if (skipBtn) {
      skipBtn.onclick = function() {
        localStorage.setItem('imagetrans_setup_done', '1');
        modal.style.display = 'none';
        switchTab('translate');
      };
    }
  }

  // ==================== Status Mask ====================

  function setupStatusMask() {
    // mask is created in HTML
  }

  function showStatus(msg) {
    if (statusMask) {
      statusMask.style.display = 'flex';
      if (statusText) statusText.textContent = msg;
    }
  }

  function hideStatus() {
    if (statusMask) {
      statusMask.style.display = 'none';
    }
  }

  // ==================== Text Modal ====================

  function setupTextModal() {
    if (!textModal) return;
    const closeBtn = textModal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        textModal.style.display = 'none';
      });
    }
    textModal.addEventListener('click', function(e) {
      if (e.target === textModal) {
        textModal.style.display = 'none';
      }
    });

    // TTS button
    const ttsBtn = textModal.querySelector('.modal-tts-btn');
    const ttsSelect = $('#modal-tts-select');
    if (ttsBtn) {
      ttsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const sourceText = textModal.getAttribute('data-source-text') || '';
        let voice;
        if (ttsSelect && ttsSelect.selectedIndex >= 0) {
          const voiceName = ttsSelect.options[ttsSelect.selectedIndex].getAttribute('data-name');
          if (voiceName && typeof getVoiceByName === 'function') {
            voice = getVoiceByName(voiceName);
          }
        }
        if (typeof speak === 'function') {
          speak(sourceText, voice);
        }
      });
    }

    // Copy button
    const copyBtn = textModal.querySelector('.modal-copy-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        const sourceText = textModal.getAttribute('data-source-text') || '';
        const targetText = textModal.getAttribute('data-target-text') || '';
        navigator.clipboard.writeText(sourceText + '\n' + targetText).then(function() {
          copyBtn.textContent = '✓';
          setTimeout(function() { copyBtn.textContent = t('scan_copy'); }, 1500);
        });
      });
    }
  }

  function showTextModal(sourceText, targetText, box) {
    if (!textModal) return;
    textModal.setAttribute('data-source-text', sourceText);
    textModal.setAttribute('data-target-text', targetText);
    const sourceEl = textModal.querySelector('.modal-source');
    const targetEl = textModal.querySelector('.modal-target');
    if (sourceEl) sourceEl.textContent = sourceText;
    if (targetEl) targetEl.textContent = targetText;

    // Populate TTS voice selector
    populateModalTTSSelect();

    textModal.style.display = 'flex';
  }

  function populateModalTTSSelect() {
    const ttsSelect = $('#modal-tts-select');
    if (!ttsSelect) return;
    ttsSelect.innerHTML = '';
    if (typeof loadVoices === 'function') loadVoices();
    const savedVoice = Settings.get('tts');
    // voices is global from tts.js
    const voiceList = (typeof voices !== 'undefined') ? voices : [];
    if (voiceList.length === 0) {
      // Try to load voices synchronously
      if (typeof speechSynthesis !== 'undefined') {
        const synVoices = speechSynthesis.getVoices();
        synVoices.forEach(function(v) { voiceList.push(v); });
      }
    }
    voiceList.forEach(function(v) {
      const opt = document.createElement('option');
      opt.textContent = v.name + ' (' + v.lang + ')';
      opt.setAttribute('data-name', v.name);
      if (!savedVoice && v.default) opt.selected = true;
      if (savedVoice && v.name === savedVoice) opt.selected = true;
      ttsSelect.appendChild(opt);
    });
    // Save selected voice on change
    ttsSelect.onchange = function() {
      if (ttsSelect.selectedIndex >= 0) {
        const name = ttsSelect.options[ttsSelect.selectedIndex].getAttribute('data-name');
        if (name) Settings.set('tts', name);
      }
    };
  }

  // ==================== Translate Tab ====================

  function setupTranslateTab() {
    // Select Image button
    const selectImgBtn = $('#btn-select-image');
    if (selectImgBtn && translateFileInput) {
      selectImgBtn.addEventListener('click', function() {
        translateFileInput.value = ''; // Reset so same file can be re-selected
        translateFileInput.click();
      });
    }

    // File input
    if (translateFileInput) {
      translateFileInput.addEventListener('change', function() {
        if (translateFileInput.files.length > 0) {
          loadTranslateImage(translateFileInput.files[0]);
        }
      });
    }

    // Drop zone
    if (translateDropZone) {
      translateDropZone.addEventListener('click', function() {
        if (translateFileInput) translateFileInput.click();
      });

      translateDropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        translateDropZone.classList.add('drag-over');
      });

      translateDropZone.addEventListener('dragleave', function() {
        translateDropZone.classList.remove('drag-over');
      });

      translateDropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        translateDropZone.classList.remove('drag-over');
        if (e.dataTransfer.files.length > 0) {
          loadTranslateImage(e.dataTransfer.files[0]);
        }
      });
    }

    // Paste support
    document.addEventListener('paste', function(e) {
      if (tabPanels['translate'] && !tabPanels['translate'].classList.contains('hidden')) {
        if (e.clipboardData.files.length > 0) {
          e.preventDefault();
          loadTranslateImage(e.clipboardData.files[0]);
        }
      }
    });

    // Translate button
    if (translateBtn) {
      translateBtn.addEventListener('click', doTranslate);
    }

    // Show translated checkbox
    if (translateShowChk) {
      translateShowChk.addEventListener('change', function() {
        toggleTranslatedView(translateShowChk.checked);
      });
    }

    // Text box click handler
    if (translateContainer) {
      translateContainer.addEventListener('textbox-click', function(e) {
        const box = e.detail.box;
        const sourceText = box.text || box.source || '';
        const targetText = box.target || '';
        showTextModal(sourceText, targetText, box);
      });
    }

  }

  function loadTranslateImage(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      translateOriginalDataURL = e.target.result;
      // Reset target image
      if (translateImgTarget) {
        translateImgTarget.src = '';
        translateImgTarget.style.display = 'none';
      }
      if (translateImgSource) {
        translateImgSource.src = e.target.result;
        translateImgSource.style.display = '';
      }
      // Clear overlay boxes (re-query since createTextOverlay replaces the element)
      const overlay = translateContainer ? translateContainer.querySelector('.text-overlay') : null;
      if (overlay) overlay.remove();
      translateBoxes = [];
      translateScale = 1.0;
      // Reset checkbox
      if (translateShowChk) translateShowChk.checked = false;
      // Hide drop zone
      if (translateDropZone) translateDropZone.classList.add('hidden');
    };
    reader.onerror = function() {
      alert('Failed to load image.');
    };
    reader.readAsDataURL(file);
  }

  async function doTranslate() {
    if (!translateImgSource || !translateImgSource.src || translateImgSource.src === window.location.href) {
      alert('Please load an image first.');
      return;
    }

    showStatus(t('translating'));
    translateBtn.disabled = true;

    try {
      const img = translateImgSource;
      const dataURL = Render.imageToDataURL(img, 'image/webp', 0.8);

      // Compress if needed
      let finalDataURL = dataURL;
      if (img.naturalWidth > 1500) {
        const compressed = Render.compressImage(img, 1500);
        finalDataURL = compressed.dataURL;
        translateScale = 1500 / img.naturalWidth;
      }

      // Validate language pair
      // Local PaddleOCR always needs explicit languages
      // Remote server: local server can use auto (has its own project settings), public server can't
      const sourceLang = Settings.get('sourceLang');
      const targetLang = Settings.get('targetLang');
      const translationMode = Settings.get('translationMode');
      const useOpenAI = Settings.get('useOpenAI');

      if (sourceLang === 'auto' || targetLang === 'auto') {
        // Check if we're using a local server that supports auto
        const serverURL = Settings.get('serverURL');
        const isLocalServer = /(localhost|127\.0\.0\.1|local\.basiccat\.org|192\.168\.\d+\.\d+|10\.\d+\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)/i.test(serverURL);
        const needsExplicitLang = (translationMode === 'local') || useOpenAI || !isLocalServer;

        if (needsExplicitLang) {
          alert(t('alert_set_langpair'));
          switchTab('settings');
          hideStatus();
          translateBtn.disabled = false;
          return;
        }
      }

      const result = await Translate.translateImage(finalDataURL, { onProgress: showStatus });

      if (result.noText) {
        alert(t('no_text'));
        hideStatus();
        translateBtn.disabled = false;
        return;
      }

      translateBoxes = result.boxes;

      if (result.translatedImage && !result.renderTextInFrontend) {
        // Server returned a rendered image - wait for it to load + layout
        if (translateImgTarget) {
          translateImgTarget.src = result.translatedImage;
          translateImgTarget.style.display = '';
          await waitForImageLayout(translateImgTarget);
        }
        if (translateImgSource) translateImgSource.style.display = 'none';
        Render.createTextOverlay(translateContainer, result.boxes, translateImgTarget, 1.0);
        if (translateShowChk) translateShowChk.checked = true;
      } else if (result.boxes.length > 0) {
        // Render text on canvas, wait for image load + layout, then create overlay
        const renderedDataURL = await Render.renderTranslatedImage(finalDataURL, result.boxes);
        if (translateImgTarget) {
          translateImgTarget.src = renderedDataURL;
          translateImgTarget.style.display = '';
          await waitForImageLayout(translateImgTarget);
        }
        if (translateImgSource) {
          translateImgSource.style.display = 'none';
        }
        Render.createTextOverlay(translateContainer, result.boxes, translateImgTarget, 1.0);
        if (translateShowChk) translateShowChk.checked = true;
      }

    } catch (err) {
      console.error('Translation error:', err);
      if (err.message === 'LANGPAIR_REQUIRED') {
        alert(t('alert_set_langpair'));
      } else {
        alert(t('error_server') + ' ' + err.message);
      }
    }

    hideStatus();
    translateBtn.disabled = false;
  }

  function toggleTranslatedView(showTranslated) {
    if (!translateImgSource || !translateImgTarget) return;
    if (showTranslated) {
      if (translateImgTarget.src && translateImgTarget.src !== window.location.href) {
        translateImgSource.style.display = 'none';
        translateImgTarget.style.display = '';
        // Only show overlay text if there's no separate rendered image
        if (translateImgTarget.src === translateImgSource.src) {
          Render.showTextOverlay(translateContainer);
        }
      }
    } else {
      translateImgSource.style.display = '';
      translateImgTarget.style.display = 'none';
      Render.hideTextOverlay(translateContainer);
    }
  }

  // ==================== Scan Tab ====================

  function setupScanTab() {
    // Open Camera button
    const cameraBtn = $('#btn-camera-start');
    if (cameraBtn) {
      cameraBtn.addEventListener('click', openScanCamera);
    }

    // Load Image button
    const galleryBtn = $('#btn-scan-gallery');
    if (galleryBtn && scanFileInput) {
      galleryBtn.addEventListener('click', function() { scanFileInput.click(); });
    }

    if (scanFileInput) {
      scanFileInput.addEventListener('change', function() {
        if (scanFileInput.files.length > 0) {
          openScanImage(scanFileInput.files[0]);
        }
      });
    }

    // Fullscreen: Close button
    const closeBtn = $('#scan-fs-close');
    if (closeBtn) closeBtn.addEventListener('click', closeScanFullscreen);

    // Fullscreen: Capture button
    const captureBtn = $('#scan-fs-capture');
    if (captureBtn) captureBtn.addEventListener('click', doScanCapture);

    // Fullscreen: ESC to close
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && scanFullscreen && scanFullscreen.classList.contains('active')) {
        closeScanFullscreen();
      }
    });

    // Camera list initialized lazily when Open Camera is clicked
  }

  async function initScanCameras() {
    // enumerateDevices works without camera permission (labels may be empty)
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      scanCameras = devices.filter(function(d) { return d.kind === 'videoinput'; });
      scanCurrentCamera = scanCameras.length > 0 ? scanCameras[scanCameras.length - 1] : null;
    } catch (e) {
      console.log('Failed to enumerate devices');
    }
  }

  // ==================== Scan: Fullscreen Overlay ====================

  async function openScanCamera() {
    scanMode = 'camera';
    // Start stream first (triggers permission prompt)
    try {
      scanStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1920 }, height: { ideal: 1080 }, facingMode: 'environment' },
        audio: false
      });
    } catch (e) {
      console.error('Failed to start camera:', e);
      alert('Failed to start camera.');
      return;
    }
    if (scanFSVideo) {
      scanFSVideo.srcObject = scanStream;
      scanFSVideo.style.display = '';
    }
    if (scanFSImage) scanFSImage.style.display = 'none';
    // Now enumerate devices (labels available after permission granted)
    await initScanCameras();

    showScanFullscreen();
    populateScanCameraSelect();
  }

  function openScanImage(file) {
    scanMode = 'image';
    const reader = new FileReader();
    reader.onload = function(e) {
      scanFSImageData = e.target.result;
      if (scanFSImage) {
        scanFSImage.src = e.target.result;
        scanFSImage.style.display = '';
      }
      if (scanFSVideo) scanFSVideo.style.display = 'none';
    };
    reader.readAsDataURL(file);
    showScanFullscreen();
    populateScanCameraSelect();
  }

  function showScanFullscreen() {
    if (!scanFullscreen) return;
    scanFullscreen.classList.add('active');
    // Init selection rectangle after a short delay (wait for video/image to render)
    setTimeout(function() {
      initScanSelection();
      addScanResizeHandles();
    }, 300);
  }

  function closeScanFullscreen() {
    if (!scanFullscreen) return;
    scanFullscreen.classList.remove('active');
    // Stop camera
    closeStream(scanStream);
    scanStream = null;
    if (scanFSVideo) { scanFSVideo.srcObject = null; scanFSVideo.style.display = 'none'; }
    if (scanFSImage) { scanFSImage.style.display = 'none'; scanFSImage.src = ''; }
    scanFSImageData = null;
    // Remove resize handles
    removeScanResizeHandles();
    // Remove selection box
    if (scanSelectionBox) scanSelectionBox.style.display = 'none';
    scanRect = null;
    // Reset buttons
    if (scanCameraSelect) scanCameraSelect.style.display = 'none';
  }

  async function switchScanCameraTo(deviceId) {
    if (scanMode !== 'camera') return;
    closeStream(scanStream);
    try {
      scanStream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 1920 }, height: { ideal: 1080 }, deviceId: { exact: deviceId } },
        audio: false
      });
      if (scanFSVideo) scanFSVideo.srcObject = scanStream;
    } catch (e) {
      console.error('Failed to switch camera:', e);
    }
  }

  function populateScanCameraSelect() {
    if (!scanCameraSelect) return;
    scanCameraSelect.innerHTML = '';
    if (scanMode === 'image' || scanCameras.length === 0) {
      scanCameraSelect.style.display = 'none';
      return;
    }
    scanCameras.forEach(function(cam, i) {
      const opt = document.createElement('option');
      opt.value = cam.deviceId;
      opt.textContent = cam.label || ('Camera ' + (i + 1));
      if (scanCurrentCamera && cam.deviceId === scanCurrentCamera.deviceId) {
        opt.selected = true;
      }
      scanCameraSelect.appendChild(opt);
    });
    scanCameraSelect.style.display = '';
    scanCameraSelect.disabled = scanCameras.length <= 1;
    // Change handler
    scanCameraSelect.onchange = function() {
      switchScanCameraTo(scanCameraSelect.value);
    };
  }

  // ==================== Scan: Selection Rectangle ====================

  function initScanSelection() {
    if (!scanSelectionBox) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const selW = Math.round(vw * 0.6);
    const selH = Math.round(vh * 0.6);
    const selL = Math.round((vw - selW) / 2);
    const selT = Math.round((vh - selH) / 2);

    scanRect = { left: selL, top: selT, width: selW, height: selH };
    applyScanRect(scanRect);
    scanSelectionBox.style.display = '';

    // Dragging setup
    setupScanSelectionDrag();
  }

  function applyScanRect(rect) {
    scanRect = rect;
    if (!scanSelectionBox) return;
    scanSelectionBox.style.left = rect.left + 'px';
    scanSelectionBox.style.top = rect.top + 'px';
    scanSelectionBox.style.width = rect.width + 'px';
    scanSelectionBox.style.height = rect.height + 'px';
    updateScanHandlePositions();
  }

  function setupScanSelectionDrag() {
    if (!scanSelectionBox) return;

    scanSelectionBox.onmousedown = function(e) {
      if (scanResizing) return;
      scanDragging = true;
      scanDragStartX = e.clientX;
      scanDragStartY = e.clientY;
      scanDragOrigLeft = scanRect.left;
      scanDragOrigTop = scanRect.top;
      e.preventDefault();
    };

    // Touch
    scanSelectionBox.ontouchstart = function(e) {
      if (scanResizing || e.touches.length !== 1) return;
      scanDragging = true;
      scanDragStartX = e.touches[0].clientX;
      scanDragStartY = e.touches[0].clientY;
      scanDragOrigLeft = scanRect.left;
      scanDragOrigTop = scanRect.top;
      e.preventDefault();
    };
  }

  // Global move/up handlers
  document.addEventListener('mousemove', function(e) {
    if (!scanDragging || !scanRect) return;
    const dx = e.clientX - scanDragStartX;
    const dy = e.clientY - scanDragStartY;
    const newLeft = Math.max(0, Math.min(window.innerWidth - scanRect.width, scanDragOrigLeft + dx));
    const newTop = Math.max(0, Math.min(window.innerHeight - scanRect.height, scanDragOrigTop + dy));
    applyScanRect({ left: newLeft, top: newTop, width: scanRect.width, height: scanRect.height });
  });

  document.addEventListener('mouseup', function() {
    if (scanDragging) { scanDragging = false; }
    if (scanResizing) { scanResizing = false; scanResizeCorner = null; }
  });

  document.addEventListener('touchmove', function(e) {
    if (!scanDragging || !scanRect || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - scanDragStartX;
    const dy = e.touches[0].clientY - scanDragStartY;
    const newLeft = Math.max(0, Math.min(window.innerWidth - scanRect.width, scanDragOrigLeft + dx));
    const newTop = Math.max(0, Math.min(window.innerHeight - scanRect.height, scanDragOrigTop + dy));
    applyScanRect({ left: newLeft, top: newTop, width: scanRect.width, height: scanRect.height });
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchend', function() {
    if (scanDragging) { scanDragging = false; }
    if (scanResizing) { scanResizing = false; scanResizeCorner = null; }
  });

  // ==================== Scan: Resize Handles ====================

  function addScanResizeHandles() {
    removeScanResizeHandles();
    if (!scanRect) return;
    const handleSize = window.innerWidth < 600 ? 16 : 12;
    const offset = handleSize / 2;
    const corners = [
      { id: 'nw', left: scanRect.left - offset, top: scanRect.top - offset, cursor: 'nwse-resize' },
      { id: 'ne', left: scanRect.left + scanRect.width - offset, top: scanRect.top - offset, cursor: 'nesw-resize' },
      { id: 'sw', left: scanRect.left - offset, top: scanRect.top + scanRect.height - offset, cursor: 'nesw-resize' },
      { id: 'se', left: scanRect.left + scanRect.width - offset, top: scanRect.top + scanRect.height - offset, cursor: 'nwse-resize' }
    ];

    corners.forEach(function(corner) {
      const h = document.createElement('div');
      h.className = 'scan-handle ' + corner.id;
      h.style.cssText =
        'position:fixed;z-index:9995;width:' + handleSize + 'px;height:' + handleSize + 'px;' +
        'background:#fff;border:1px solid #333;border-radius:2px;cursor:' + corner.cursor + ';' +
        'left:' + corner.left + 'px;top:' + corner.top + 'px;';
      h.setAttribute('data-corner', corner.id);
      h.addEventListener('mousedown', function(e) {
        e.stopPropagation(); e.preventDefault();
        startScanResize(corner.id, e.clientX, e.clientY);
      });
      h.addEventListener('touchstart', function(e) {
        e.stopPropagation(); e.preventDefault();
        if (e.touches.length === 1) {
          startScanResize(corner.id, e.touches[0].clientX, e.touches[0].clientY);
        }
      }, { passive: false });
      document.body.appendChild(h);
      scanHandles.push(h);
    });
  }

  function removeScanResizeHandles() {
    scanHandles.forEach(function(h) { h.remove(); });
    scanHandles = [];
  }

  function updateScanHandlePositions() {
    if (!scanRect) return;
    const handleSize = window.innerWidth < 600 ? 16 : 12;
    const offset = handleSize / 2;
    const corners = {
      nw: { left: scanRect.left - offset, top: scanRect.top - offset },
      ne: { left: scanRect.left + scanRect.width - offset, top: scanRect.top - offset },
      sw: { left: scanRect.left - offset, top: scanRect.top + scanRect.height - offset },
      se: { left: scanRect.left + scanRect.width - offset, top: scanRect.top + scanRect.height - offset }
    };

    scanHandles.forEach(function(h) {
      const id = h.getAttribute('data-corner');
      if (corners[id]) {
        h.style.left = corners[id].left + 'px';
        h.style.top = corners[id].top + 'px';
      }
    });
  }

  function startScanResize(corner, cx, cy) {
    scanResizing = true;
    scanResizeCorner = corner;
    // Anchor = opposite corner
    switch (corner) {
      case 'nw':
        scanResizeAnchorX = scanRect.left + scanRect.width;
        scanResizeAnchorY = scanRect.top + scanRect.height;
        break;
      case 'ne':
        scanResizeAnchorX = scanRect.left;
        scanResizeAnchorY = scanRect.top + scanRect.height;
        break;
      case 'sw':
        scanResizeAnchorX = scanRect.left + scanRect.width;
        scanResizeAnchorY = scanRect.top;
        break;
      case 'se':
        scanResizeAnchorX = scanRect.left;
        scanResizeAnchorY = scanRect.top;
        break;
    }
  }

  // Resize move handler (global)
  document.addEventListener('mousemove', function(e) {
    if (!scanResizing || !scanRect) return;
    if (e.target && scanHandles.indexOf(e.target) === -1 && e.target !== scanSelectionBox) return;
    resizeScanRect(e.clientX, e.clientY);
  });

  document.addEventListener('touchmove', function(e) {
    if (!scanResizing || !scanRect || e.touches.length !== 1) return;
    resizeScanRect(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
  }, { passive: false });

  function resizeScanRect(cx, cy) {
    let newLeft = Math.min(scanResizeAnchorX, cx);
    let newTop = Math.min(scanResizeAnchorY, cy);
    let newWidth = Math.abs(cx - scanResizeAnchorX);
    let newHeight = Math.abs(cy - scanResizeAnchorY);

    newLeft = Math.max(0, newLeft);
    newTop = Math.max(0, newTop);
    if (newLeft + newWidth > window.innerWidth) newWidth = window.innerWidth - newLeft;
    if (newTop + newHeight > window.innerHeight) newHeight = window.innerHeight - newTop;
    if (newWidth < 20) { newWidth = 20; newLeft = cx > scanResizeAnchorX ? scanResizeAnchorX : scanResizeAnchorX - 20; }
    if (newHeight < 20) { newHeight = 20; newTop = cy > scanResizeAnchorY ? scanResizeAnchorY : scanResizeAnchorY - 20; }

    applyScanRect({ left: newLeft, top: newTop, width: newWidth, height: newHeight });
  }

  // ==================== Scan: Capture & Translate ====================

  function doScanCapture() {
    if (!scanRect) return;
    const rect = scanRect;

    let sourceW, sourceH, sourceEl;
    if (scanMode === 'camera' && scanFSVideo && scanFSVideo.videoWidth) {
      sourceW = scanFSVideo.videoWidth;
      sourceH = scanFSVideo.videoHeight;
      sourceEl = scanFSVideo;
    } else if (scanMode === 'image' && scanFSImage && scanFSImage.naturalWidth) {
      sourceW = scanFSImage.naturalWidth;
      sourceH = scanFSImage.naturalHeight;
      sourceEl = scanFSImage;
    } else {
      return;
    }

    // Calculate scale: the video/image uses object-fit:contain
    // The image fits entirely within the display, centered, with bars on sides or top/bottom
    const displayW = window.innerWidth;
    const displayH = window.innerHeight;
    const sourceAspect = sourceW / sourceH;
    const displayAspect = displayW / displayH;
    let renderW, renderH, offsetX, offsetY;

    if (sourceAspect > displayAspect) {
      // Image is wider → fit to width, bars on top/bottom
      renderW = displayW;
      renderH = displayW / sourceAspect;
      offsetX = 0;
      offsetY = (displayH - renderH) / 2;
    } else {
      // Image is taller → fit to height, bars on left/right
      renderH = displayH;
      renderW = displayH * sourceAspect;
      offsetX = (displayW - renderW) / 2;
      offsetY = 0;
    }

    const scaleX = sourceW / renderW;
    const scaleY = sourceH / renderH;

    let sx = (rect.left - offsetX) * scaleX;
    let sy = (rect.top - offsetY) * scaleY;
    let sw = rect.width * scaleX;
    let sh = rect.height * scaleY;

    // Clamp
    sx = Math.max(0, Math.min(sourceW - 1, sx));
    sy = Math.max(0, Math.min(sourceH - 1, sy));
    sw = Math.max(1, Math.min(sourceW - sx, sw));
    sh = Math.max(1, Math.min(sourceH - sy, sh));

    const canvas = document.createElement('canvas');
    canvas.width = sw;
    canvas.height = sh;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(sourceEl, sx, sy, sw, sh, 0, 0, sw, sh);

    const dataURL = canvas.toDataURL('image/jpeg', 0.9);

    // Close fullscreen then translate
    closeScanFullscreen();
    doScanTranslate(dataURL);
  }

  async function doScanTranslate(dataURL) {
    showStatus(t('translating'));

    try {
      const result = await Translate.translateRegion(dataURL, { onProgress: showStatus });

      if (result.regionMap) {
        addScanResult(dataURL, result.regionMap);
        showScanResultModal(result.regionMap);
      }
    } catch (err) {
      console.error('Scan translation error:', err);
      alert(t('error_server') + ' ' + err.message);
    }

    hideStatus();
  }

  function addScanResult(dataURL, regionMap) {
    if (!scanResults) return;
    const container = document.createElement('div');
    container.className = 'scan-result';

    const img = document.createElement('img');
    img.src = dataURL;
    container.appendChild(img);

    const textDiv = document.createElement('div');
    textDiv.className = 'scan-result-text';
    let displayText = regionMap.source + '\n';
    const targets = regionMap.target || [];
    targets.forEach(function(t) {
      displayText += (t.engine || '') + ': ' + t.text + '\n';
    });
    textDiv.textContent = displayText;
    container.appendChild(textDiv);

    // Click to show detail modal
    container.addEventListener('click', function() {
      showScanResultModal(regionMap);
    });

    scanResults.insertBefore(container, scanResults.firstChild);
  }

  function showScanResultModal(regionMap) {
    const sourceText = regionMap.source || '';
    const targets = regionMap.target || [];
    let targetText = '';
    targets.forEach(function(t) {
      if (targetText) targetText += '\n';
      targetText += (t.engine ? t.engine + ': ' : '') + t.text;
    });
    showTextModal(sourceText, targetText);
  }

  // ==================== Settings Tab ====================

  function populateSelectOptions() {
    // Populate source/target language selects
    const sourceSelect = $('#setting-sourceLang');
    const targetSelect = $('#setting-targetLang');
    if (sourceSelect) {
      LANGUAGE_CODES.forEach(function(lang) {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = lang.name;
        sourceSelect.appendChild(opt);
      });
    }
    if (targetSelect) {
      LANGUAGE_CODES.forEach(function(lang) {
        const opt = document.createElement('option');
        opt.value = lang.code;
        opt.textContent = lang.name;
        targetSelect.appendChild(opt);
      });
    }
  }

  function setupSettingsTab() {
    // Populate select options first
    populateSelectOptions();
    // Populate form with current settings
    populateSettingsForm();
    // Save button
    const saveBtn = $('#btn-settings-save');
    if (saveBtn) {
      saveBtn.addEventListener('click', saveSettings);
    }
    // Public server button
    const publicBtn = $('#btn-public-server');
    if (publicBtn) {
      publicBtn.addEventListener('click', function() {
        const urlInput = $('#setting-serverURL');
        if (urlInput) urlInput.value = 'https://service.basiccat.org:51043';
      });
    }
    // Local server button
    const localBtn = $('#btn-local-server');
    if (localBtn) {
      localBtn.addEventListener('click', function() {
        const urlInput = $('#setting-serverURL');
        if (urlInput) urlInput.value = 'https://local.basiccat.org:51043';
      });
    }
    // Check instances button
    const checkBtn = $('#btn-check-instances');
    if (checkBtn) {
      checkBtn.addEventListener('click', function() {
        const url = $('#setting-serverURL').value;
        if (url) {
          window.open(url + '/list', '_blank');
        } else {
          window.open('https://local.basiccat.org:51043/list', '_blank');
        }
      });
    }
    // OpenAI toggle
    const openaiChk = $('#setting-useOpenAI');
    if (openaiChk) {
      openaiChk.addEventListener('change', function() {
        const section = $('#openai-section');
        if (section) section.style.display = openaiChk.checked ? 'block' : 'none';
      });
    }
    // CSS preset buttons
    setupCSSPresets();
    // UI Language change
    const uiLangSelect = $('#setting-uiLanguage');
    if (uiLangSelect) {
      uiLangSelect.addEventListener('change', function() {
        Settings.set('uiLanguage', uiLangSelect.value);
        applyI18n();
      });
    }
  }

  function populateSettingsForm() {
    const fields = [
      'serverURL', 'displayName', 'password',
      'sourceLang', 'targetLang', 'translationMode', 'defaultPresetTranslation',
      'useOpenAI', 'openaiURL', 'openaiKey', 'openaiModel', 'openaiPrompt',
      'ocrMethod', 'useYOLODetection', 'useYOLOForJapanese',
      'xSpacing', 'ySpacing', 'renderTextCSS', 'renderTextInFrontend',
      'uiLanguage'
    ];

    fields.forEach(function(key) {
      const el = $('#setting-' + key);
      if (!el) return;
      const val = Settings.get(key);
      if (el.type === 'checkbox') {
        el.checked = val;
      } else if (el.tagName === 'SELECT') {
        setSelectValue(el, val);
      } else {
        el.value = val !== undefined && val !== null ? val : '';
      }
    });

    // Show/hide OpenAI section
    const openaiSection = $('#openai-section');
    if (openaiSection) {
      openaiSection.style.display = Settings.get('useOpenAI') ? 'block' : 'none';
    }
  }

  function saveSettings() {
    const data = {};
    const fields = [
      'serverURL', 'displayName', 'password',
      'sourceLang', 'targetLang', 'translationMode', 'defaultPresetTranslation',
      'useOpenAI', 'openaiURL', 'openaiKey', 'openaiModel', 'openaiPrompt',
      'ocrMethod', 'useYOLODetection', 'useYOLOForJapanese',
      'xSpacing', 'ySpacing', 'renderTextCSS', 'renderTextInFrontend',
      'uiLanguage'
    ];

    fields.forEach(function(key) {
      const el = $('#setting-' + key);
      if (!el) return;
      if (el.type === 'checkbox') {
        data[key] = el.checked;
      } else if (el.type === 'number') {
        data[key] = parseInt(el.value) || Settings.get(key);
      } else {
        data[key] = el.value;
      }
    });

    Settings.saveAll(data);
    alert(t('settings_saved'));
  }

  function setupCSSPresets() {
    const presets = {
      'css-default': 'text-align: center;\nborder-radius: 10%;',
      'css-center': 'text-align: center;',
      'css-center-bold': 'text-align: center;\nfont-weight: bold;',
      'css-rounded': 'text-align: center;\nborder-radius: 8px;',
      'css-uppercase': 'text-align: center;\ntext-transform: uppercase;',
      'css-rounded-uppercase': 'text-align: center;\nborder-radius: 8px;\ntext-transform: uppercase;'
    };

    Object.keys(presets).forEach(function(id) {
      const btn = $('#' + id);
      if (btn) {
        btn.addEventListener('click', function() {
          const el = $('#setting-renderTextCSS');
          if (el) el.value = presets[id];
        });
      }
    });
  }

  // ==================== I18N ====================

  function applyI18n() {
    const elements = document.querySelectorAll('[data-i18n]');
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const key = el.getAttribute('data-i18n');
      if (!key) continue;
      if (el.tagName === 'TITLE') continue;
      if (el.tagName === 'INPUT' && (el.type === 'button' || el.type === 'submit')) {
        el.value = t(key);
      } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t(key);
      } else {
        el.textContent = t(key);
      }
    }
  }

  // ==================== Utility Functions ====================

  function closeStream(stream) {
    if (stream) {
      stream.getTracks().forEach(function(track) { track.stop(); });
    }
  }

  function setSelectValue(selectEl, value) {
    for (let i = 0; i < selectEl.options.length; i++) {
      if (selectEl.options[i].value === value) {
        selectEl.selectedIndex = i;
        return;
      }
    }
  }

  // ==================== Initialize ====================

  // Wait for DOM + TTS voices
  document.addEventListener('DOMContentLoaded', function() {
    init();
  });

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    init();
  }

  // Window resize handler - update scan selection on resize
  window.addEventListener('resize', function() {
    if (scanFullscreen && scanFullscreen.classList.contains('active') && scanRect) {
      // Re-clamp the selection rectangle to new viewport
      const newLeft = Math.max(0, Math.min(window.innerWidth - scanRect.width, scanRect.left));
      const newTop = Math.max(0, Math.min(window.innerHeight - scanRect.height, scanRect.top));
      applyScanRect({ left: newLeft, top: newTop, width: scanRect.width, height: scanRect.height });
    }
  });

  // TTS voice loading
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = function() {
      if (typeof loadVoices === 'function') loadVoices();
    };
  }
  if (typeof loadVoices === 'function') loadVoices();

})();
