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

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\r\nconst {MovingObject} = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\r\n\r\nfunction Asteroid(options){\r\n    this.color = options[\"color\"] || \"grey\";\r\n    this.radius = options[\"radius\"] || 15;\r\n    this.pos = options[\"pos\"];\r\n    this.vel = Util.randomVec(1);\r\n    MovingObject.call(this, this);\r\n}\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\nmodule.exports = {\r\n    Asteroid\r\n}\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(options) {\r\n    this.pos = options[\"pos\"];\r\n    this.vel = options[\"vel\"];\r\n    this.radius = options[\"radius\"];\r\n    this.color = options[\"color\"];\r\n};\r\n\r\nMovingObject.prototype.draw = function (ctx) {\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)\r\n    ctx.strokeStyle = this.color;\r\n    ctx.lineWidth = 1;\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n    ctx.stroke();\r\n};\r\n\r\nMovingObject.prototype.move = function () {\r\n    this.pos[0] += this.vel[0];\r\n    this.pos[1] += this.vel[1];\r\n}\r\n\r\nmodule.exports = {\r\n    MovingObject      // this.MovingObject contains MovingObject\r\n}\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("// Distance between two vectors:\r\n// Dist([x_1, y_1], [x_2, y_2]) = sqrt((x_1 - x_2) ** 2 + (y_1 - y_2) ** 2)\r\n\r\n// Norm of a vector:\r\n// Norm([x_1, y_1]) = Dist([0, 0], [x_1, y_1])\r\n\r\nconst Util = {\r\n    inherits: function inherits(childClass, parentClass) {\r\n        function Surrogate() { }\r\n        Surrogate.prototype = parentClass.prototype;\r\n        childClass.prototype = new Surrogate();\r\n        childClass.prototype.constructor = childClass;\r\n    },\r\n\r\n    randomVec(length) {\r\n        const deg = 2 * Math.PI * Math.random();\r\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n    },\r\n\r\n    // Scale the length of a vector by the given amount.\r\n    scale(vec, m) {\r\n        return [vec[0] * m, vec[1] * m];\r\n    }\r\n}\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

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
eval("// object destructuring i.e. {MovingObject}\r\nconst {MovingObject} = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst {Asteroid} = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\n\r\n// testing purposes only\r\nwindow.MovingObject = MovingObject;\r\nwindow.Asteroid = Asteroid;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function(){\r\n    const canvas = document.getElementById('game-canvas');\r\n    const ctx = canvas.getContext('2d');\r\n    \r\n    // const mo = new MovingObject({\r\n    //     pos: [30, 30],\r\n    //     vel: [10, 10],\r\n    //     radius: 5,\r\n    //     color: \"#00FF00\"\r\n    // });\r\n    // mo.draw(ctx);\r\n\r\n    const as = new Asteroid({\r\n        pos: [30,30]\r\n    });\r\n    as.draw(ctx);\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;