"use strict";

require("core-js/modules/es.array.concat.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

function testingES8(text1, text2) {
  alert("".concat(text1, "\n").concat(text2));
}

var promise = Promise.resolve(); // npm install @babel/core @babel/cli @babel/preset-env --save-dev
// npx babel testing-es8.js
// npx babel testing-es8.js -o compiled-script.js
// npx babel testing-es8.js -o compiled-script.js --presets=@babel/preset-env
// npx babel src --out-dir dist --presets=@babel/preset-env
// npx babel src --out-dir dist
// npm install core-js@3 --save