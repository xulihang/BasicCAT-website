// Polyfills for iOS 15.1 compatibility
// esearch-ocr targets ES2022 and uses APIs not available in older Safari.

(function () {
  // Array.prototype.at() — Safari 15.4+
  if (!Array.prototype.at) {
    Array.prototype.at = function (index) {
      var length = this.length;
      var k = index >= 0 ? index : length + index;
      if (k < 0 || k >= length) return undefined;
      return this[k];
    };
  }

  // String.prototype.at() — Safari 15.4+
  if (!String.prototype.at) {
    String.prototype.at = function (index) {
      var length = this.length;
      var k = index >= 0 ? index : length + index;
      if (k < 0 || k >= length) return undefined;
      return this[k];
    };
  }

  // structuredClone() — Safari 15.4+
  if (typeof structuredClone === 'undefined') {
    window.structuredClone = function (value) {
      return JSON.parse(JSON.stringify(value));
    };
  }
})();
