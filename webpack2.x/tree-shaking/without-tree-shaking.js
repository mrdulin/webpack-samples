// 4.0K	dist/bundles/app.b414a49e.js
// 4.0K	dist/bundles
// 4.0K	dist/index.html
// 8.0K	dist


/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./app/modules/components.js ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var componentA = exports.componentA = function componentA() {
    var element = document.createElement('div');
    element.innerText = 'tree shaking test';
    return element;
};

var componentB = exports.componentB = function componentB() {
    var element = document.createElement('div');
    element.innerText = 'webpack2.x';
    return element;
};

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _components = __webpack_require__(/*! ./modules/components */ 0);

document.body.appendChild((0, _components.componentA)());

/***/ })
/******/ ]);
