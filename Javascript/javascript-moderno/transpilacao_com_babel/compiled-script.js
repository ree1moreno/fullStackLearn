"use strict";

function testingES8(text1, text2) {
  alert("".concat(text1, "\n").concat(text2));
} // npm install @babel/core @babel/cli @babel/preset-env --save-dev
// npx babel testing-es8.js
// npx babel testing-es8.js -o compiled-script.js
