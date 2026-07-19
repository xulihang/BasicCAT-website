---
title: ImageTrans Browser Extension — Translate Images on Any Webpage
layout: page
description: Translate images on any webpage with the ImageTrans browser extension. Right-click or use Ctrl+Shift+F to translate comics, manga, posters, and photos instantly. Available for Chrome and Firefox.
---

<style>
  :root {
    --ext-primary: #4a6cf7;
    --ext-primary-hover: #3b5de7;
    --ext-text: #2d3748;
    --ext-text-secondary: #718096;
    --ext-bg: #f8fafc;
    --ext-card-bg: #ffffff;
    --ext-border: #e2e8f0;
    --ext-radius: 12px;
    --ext-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
    --ext-shadow-lg: 0 4px 16px rgba(0,0,0,0.08);
  }

  .ext-hero {
    text-align: center;
    padding: 48px 24px 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: var(--ext-radius);
    color: #fff;
    margin-bottom: 32px;
  }
  .ext-hero-icon {
    width: 80px;
    height: 80px;
    background: rgba(255,255,255,0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    margin: 0 auto 20px;
    backdrop-filter: blur(10px);
  }
  .ext-hero h1 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 12px 0;
    color: #fff;
  }
  .ext-hero p {
    font-size: 17px;
    opacity: 0.9;
    margin: 0 0 24px 0;
    line-height: 1.6;
    max-width: 640px;
    margin-left: auto;
    margin-right: auto;
  }
  .ext-hero-meta {
    font-size: 13px;
    opacity: 0.75;
    margin-bottom: 20px;
  }
  .ext-hero-meta span {
    margin: 0 8px;
  }

  .ext-buttons {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .ext-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.15s, box-shadow 0.15s;
    cursor: pointer;
  }
  .ext-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    text-decoration: none;
  }
  .ext-btn-chrome {
    background: #fff;
    color: #333;
  }
  .ext-btn-firefox {
    background: rgba(255,255,255,0.25);
    color: #fff;
    border: 2px solid rgba(255,255,255,0.5);
  }
  .ext-btn-firefox:hover {
    background: rgba(255,255,255,0.35);
    color: #fff;
  }
  .ext-btn img {
    width: 22px;
    height: 22px;
  }

  /* Section titles */
  .ext-section {
    margin-bottom: 36px;
  }
  .ext-section h2 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 16px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid var(--ext-border);
    color: var(--ext-text);
  }
  .ext-section h3 {
    font-size: 17px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: var(--ext-text);
  }
  .ext-section p {
    color: var(--ext-text-secondary);
    line-height: 1.7;
    margin: 0 0 12px 0;
  }

  /* Feature grid */
  .ext-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
  }
  .ext-feature-card {
    background: var(--ext-card-bg);
    border: 1px solid var(--ext-border);
    border-radius: var(--ext-radius);
    padding: 20px;
    box-shadow: var(--ext-shadow);
  }
  .ext-feature-card .ext-feature-icon {
    font-size: 28px;
    margin-bottom: 10px;
  }
  .ext-feature-card h4 {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 6px 0;
  }
  .ext-feature-card p {
    font-size: 13px;
    color: var(--ext-text-secondary);
    line-height: 1.6;
    margin: 0;
  }

  /* Steps */
  .ext-steps {
    counter-reset: step;
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 16px;
  }
  .ext-steps li {
    counter-increment: step;
    background: var(--ext-card-bg);
    border: 1px solid var(--ext-border);
    border-radius: var(--ext-radius);
    padding: 20px 20px 20px 52px;
    position: relative;
    box-shadow: var(--ext-shadow);
  }
  .ext-steps li::before {
    content: counter(step);
    position: absolute;
    left: 16px;
    top: 18px;
    width: 26px;
    height: 26px;
    background: var(--ext-primary);
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ext-steps li strong {
    display: block;
    font-size: 14px;
    margin-bottom: 4px;
  }
  .ext-steps li span {
    font-size: 13px;
    color: var(--ext-text-secondary);
    line-height: 1.5;
  }

  /* Shortcut badge */
  .ext-kbd {
    display: inline-block;
    background: #edf2f7;
    border: 1px solid #cbd5e0;
    border-radius: 4px;
    padding: 2px 8px;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    color: #4a5568;
  }

  /* Info cards */
  .ext-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }
  .ext-info-card {
    background: var(--ext-card-bg);
    border: 1px solid var(--ext-border);
    border-radius: var(--ext-radius);
    padding: 20px;
    box-shadow: var(--ext-shadow);
  }
  .ext-info-card h4 {
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 8px 0;
    color: var(--ext-primary);
  }
  .ext-info-card ul {
    margin: 0;
    padding-left: 18px;
    font-size: 13px;
    color: var(--ext-text-secondary);
    line-height: 1.7;
  }

  /* CTA section */
  .ext-cta {
    background: var(--ext-bg);
    border: 2px dashed var(--ext-border);
    border-radius: var(--ext-radius);
    padding: 32px 24px;
    text-align: center;
  }
  .ext-cta h3 {
    margin-top: 0;
  }
  .ext-cta .ext-buttons {
    margin-top: 16px;
  }
  .ext-cta .ext-btn-chrome {
    background: #4285f4;
    color: #fff;
    border: none;
  }
  .ext-cta .ext-btn-firefox {
    background: #ff6611;
    color: #fff;
    border: none;
  }

  /* Responsive */
  @media (max-width: 600px) {
    .ext-hero {
      padding: 32px 16px 28px;
    }
    .ext-hero h1 {
      font-size: 24px;
    }
    .ext-hero p {
      font-size: 15px;
    }
    .ext-hero-icon {
      width: 64px;
      height: 64px;
      font-size: 32px;
      border-radius: 16px;
    }
    .ext-features,
    .ext-steps,
    .ext-info-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<!-- Hero -->
<div class="ext-hero">
  <div class="ext-hero-icon">🖼️</div>
  <h1>ImageTrans Browser Extension</h1>
  <p>Translate images on any webpage with a single right-click or keyboard shortcut. Designed for comics, manga, posters, screenshots, and more.</p>
  <div class="ext-hero-meta">
    Version 5.20 &nbsp;·&nbsp; Free &amp; Open Source (GPL v2.0)
  </div>
  <div class="ext-buttons">
    <a href="https://chromewebstore.google.com/detail/imagetrans/lkijcgjookpddgfacoankphnpbinmhia" class="ext-btn ext-btn-chrome" target="_blank" rel="noopener">
      <span>🌐</span> Add to Chrome
    </a>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/imagetrans/" class="ext-btn ext-btn-firefox" target="_blank" rel="noopener">
      <span>🦊</span> Add to Firefox
    </a>
  </div>
</div>

<!-- What is it -->
<div class="ext-section">
  <h2>What Is It?</h2>
  <p>
    The <strong>ImageTrans Browser Extension</strong> brings the power of AI-powered image translation directly into your web browser. It detects text in images on webpages — comics, manga, webtoon, doujin, posters, brochures, screenshots — and replaces them with translated versions automatically.
  </p>
  <p>
    Powered by <strong>PaddleOCR</strong> and the <strong>ImageTrans</strong> desktop application backend, the extension combines state-of-the-art OCR with neural machine translation to deliver accurate, context-aware translations right where you're reading.
  </p>
</div>

<!-- Features -->
<div class="ext-section">
  <h2>Key Features</h2>
  <div class="ext-features">
    <div class="ext-feature-card">
      <div class="ext-feature-icon">🖱️</div>
      <h4>Right-Click Translation</h4>
      <p>Right-click any image on a webpage and select "Translate Image" to instantly get a translated version.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">⌨️</div>
      <h4>Keyboard Shortcut</h4>
      <p>Press <span class="ext-kbd">Ctrl+Shift+F</span> to translate the image under your cursor — fast and efficient.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">🔄</div>
      <h4>Auto Translation</h4>
      <p>Enable automatic translation to have images translated as they load on the page. Great for reading long comics or manga chapters.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">📸</div>
      <h4>Screen Capture Translation</h4>
      <p>Capture a portion of the screen to translate images that can't be downloaded, or translate only part of an image — all within the browser.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">🤖</div>
      <h4>Flexible Translation Options</h4>
      <p>Pair any OCR backend (ImageTrans or PaddleOCR) with OpenAI-compatible APIs (ChatGPT, Gemini, DeepSeek) or built-in translation engines for the best results.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">🀄</div>
      <h4>Furigana &amp; Pinyin</h4>
      <p>Annotate Japanese text with furigana and Chinese text with pinyin — perfect for language learners.</p>
    </div>
  </div>
</div>

<!-- How to Use -->
<div class="ext-section">
  <h2>How to Use</h2>
  <ol class="ext-steps">
    <li>
      <strong>Install the Extension</strong>
      <span>Add it from the <a href="https://chromewebstore.google.com/detail/imagetrans/lkijcgjookpddgfacoankphnpbinmhia" target="_blank" rel="noopener">Chrome Web Store</a> or <a href="https://addons.mozilla.org/en-US/firefox/addon/imagetrans/" target="_blank" rel="noopener">Firefox Add-ons</a>.</span>
    </li>
    <li>
      <strong>Configure the Backend</strong>
      <span>Connect to an <a href="/imagetrans/">ImageTrans</a> server, use built-in PaddleOCR, or bring your own OpenAI-compatible API key.</span>
    </li>
    <li>
      <strong>Start Translating</strong>
      <span>Right-click an image → "Translate Image", or press <span class="ext-kbd">Ctrl+Shift+F</span> on any image. Done!</span>
    </li>
  </ol>
</div>

<!-- Requirements & Integration -->
<div class="ext-section">
  <h2>How It Works</h2>

  <div class="ext-info-grid">
    <div class="ext-info-card">
      <h4>🔌 With ImageTrans Desktop (Recommended)</h4>
      <ul>
        <li>ImageTrans handles the full pipeline: detection → OCR → text removal → translation → rendering</li>
        <li>Best accuracy, widest language support, and rich editing capabilities</li>
        <li>The extension sends images to ImageTrans and displays the finished result</li>
        <li>Requires <a href="/imagetrans/">ImageTrans</a> running locally or on a server</li>
      </ul>
    </div>
    <div class="ext-info-card">
      <h4>🧩 Without ImageTrans (Browser-Only)</h4>
      <ul>
        <li>The extension does everything in the browser: OCR (PaddleOCR) → translation → rendering</li>
        <li>No server or installation needed — fully self-contained</li>
        <li>Free and privacy-friendly</li>
        <li>More limited in accuracy, speed, and language options</li>
      </ul>
    </div>
  </div>

  <h3>Translation Options</h3>
  <p>The following translation methods work in both modes. When using the OpenAI-compatible API with ImageTrans, ImageTrans handles only OCR, and the extension takes care of translation and rendering in the frontend.</p>
  <div class="ext-info-grid">
    <div class="ext-info-card">
      <h4>🌐 ImageTrans Built-in Translation</h4>
      <ul>
        <li>Available when connected to ImageTrans</li>
        <li>Supports a wide range of translation engines (Google, DeepL, Baidu, etc.)</li>
        <li>Translation memory, term management, and concordance search included</li>
      </ul>
    </div>
    <div class="ext-info-card">
      <h4>🤖 OpenAI-Compatible API</h4>
      <ul>
        <li>Use ChatGPT, Gemini, DeepSeek, or any compatible API</li>
        <li>Works with or without ImageTrans — bring your own API key</li>
        <li>Flexible prompt customization for nuanced translations</li>
        <li>When used with ImageTrans: ImageTrans handles OCR, extension handles translation + rendering</li>
      </ul>
    </div>
    <div class="ext-info-card">
      <h4>🆓 MyMemory (Free)</h4>
      <ul>
        <li>Free machine translation API, no key required</li>
        <li>Good for quick, casual translations</li>
      </ul>
    </div>
  </div>
</div>

<!-- Applications -->
<div class="ext-section">
  <h2>What You Can Translate</h2>
  <div class="ext-features">
    <div class="ext-feature-card">
      <div class="ext-feature-icon">📚</div>
      <h4>Comics &amp; Manga</h4>
      <p>Read translated manga, manhwa, manhua, webtoon, and doujin on any website. The extension is specially optimized for comic speech bubbles and text layout.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">📋</div>
      <h4>Posters &amp; Brochures</h4>
      <p>Quickly understand promotional materials, infographics, and advertisements in foreign languages.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">📱</div>
      <h4>Screenshots &amp; Photos</h4>
      <p>Use screen capture to translate a portion of an image or images that can't be downloaded — all within the browser.</p>
    </div>
    <div class="ext-feature-card">
      <div class="ext-feature-icon">📝</div>
      <h4>Copy Text from Images</h4>
      <p>Extract text from images without translating. Useful for OCR tasks, data entry, and accessibility.</p>
    </div>
  </div>
</div>

<!-- Open Source -->
<div class="ext-section">
  <h2>Free &amp; Open Source</h2>
  <p>
    The ImageTrans browser extension is <strong>free</strong> and open source under the <strong>GNU General Public License v2.0</strong>. The source code is available on GitHub:
  </p>
  <p>
    📦 <a href="https://github.com/xulihang/ImageTrans_firefox_extension" target="_blank" rel="noopener">GitHub Repository</a> — browse the code, report issues, or contribute.
  </p>
  <p>
    <strong>No data collection.</strong> The extension does not collect or send your data anywhere. Your images and translations stay on your device.
  </p>
  <p>
    📄 <a href="/imagetrans/extension/privacy/">Privacy Policy</a> — learn more about how the extension handles your data.
  </p>
</div>

<!-- CTA -->
<div class="ext-cta">
  <h3>Ready to translate images on any webpage?</h3>
  <p style="color: var(--ext-text-secondary);">Free · Open Source · No data collection</p>
  <div class="ext-buttons">
    <a href="https://chromewebstore.google.com/detail/imagetrans/lkijcgjookpddgfacoankphnpbinmhia" class="ext-btn ext-btn-chrome" target="_blank" rel="noopener">
      🌐 Add to Chrome
    </a>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/imagetrans/" class="ext-btn ext-btn-firefox" target="_blank" rel="noopener">
      🦊 Add to Firefox
    </a>
  </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ImageTrans Browser Extension",
  "url": "https://www.basiccat.org/imagetrans/extension/",
  "description": "Translate images on any webpage with a single right-click. AI-powered image translation browser extension for comics, manga, posters, and screenshots.",
  "applicationCategory": "BrowserApplication",
  "operatingSystem": "Chrome, Firefox, Edge, and compatible browsers",
  "author": {
    "@type": "Person",
    "name": "xulihang"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "softwareVersion": "5.20",
  "license": "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html"
}
</script>
