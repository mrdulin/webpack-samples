/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: componentA, componentB */
/* exports used: componentA */
/*!***********************************!*\
  !*** ./app/modules/components.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return componentA; });
/* unused harmony export componentB */
var componentA = function componentA() {
    var element = document.createElement('div');
    element.innerText = 'tree shaking test';
    return element;
};

var componentB = function componentB() {
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_components__ = __webpack_require__(/*! ./modules/components */ 0);


document.body.appendChild(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__modules_components__["a" /* componentA */])());

/***/ })
/******/ ]);
