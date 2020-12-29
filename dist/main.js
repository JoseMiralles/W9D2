/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\r\n  // this.options = options;\r\n  this.pos = options[\"pos\"];\r\n  this.vel = options[\"vel\"];\r\n  this.radius = options[\"radius\"];\r\n  this.color = options[\"color\"];\r\n};\r\n\r\nMovingObject.prototype.draw = function(ctx) {\r\n  ctx.beginPath();\r\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)\r\n  ctx.strokeStyle = this.color;\r\n  ctx.lineWidth = 1;\r\n  ctx.fillStyle = this.color;\r\n  ctx.fill();\r\n  ctx.stroke();\r\n};\r\n\r\nmodule.exports = {\r\n  MovingObject      // this.MovingObject contains MovingObject\r\n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("// object destructuring i.e. {MovingObject}\r\nconst {MovingObject} = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\n\r\n// testing purposes only\r\nwindow.MovingObject = MovingObject;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function(){\r\n    const canvas = document.getElementById('game-canvas');\r\n    const ctx = canvas.getContext('2d');\r\n\r\n    console.log(\"test\");\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;