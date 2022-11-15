"use strict";

module.exports = {
  minify: false,
  options: ["setClasses"],
  "feature-detects": [
    "test/css/cssgrid",
    "test/css/flexbox",
    "test/es6/promises",
    "test/serviceworker"
  ]
};
