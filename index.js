"use strict";

function randomName() {
  return "cf" + Math.random().toString().substr(2);
}

module.exports = {
  stringBefore: function(src) {
    if (/^\s*function\s*\(/.test(src)) {
      this._couch_prefix = "const " + randomName() + " = ";
      return this._couch_prefix + src;
    }

    return src;
  },

  stringAfter: function(src) {
    if (this._couch_prefix) {
      return src.replace(this._couch_prefix, "");
    }
    return src;
  }
};
