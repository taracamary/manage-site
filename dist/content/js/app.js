(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],[
/* 0 */
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// CSS
__webpack_require__(/*! ./scss/styles.scss */ 2); // JS


__webpack_require__(/*! ./js/frontend */ 1).init();

/***/ }),
/* 1 */
/*!************************!*\
  !*** ./js/frontend.js ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function initSocialsDropdown() {
  var dropdown = document.querySelector(".js-socials");
  var toggleButton = document.querySelector(".js-socials__item--dropdown");
  if (!dropdown || !toggleButton) return;
  toggleButton.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("socials--open");
  });
  document.addEventListener("click", function () {
    dropdown.classList.remove("socials--open");
  });
}

module.exports = {
  init: function init() {
    initSocialsDropdown();
  }
};

/***/ }),
/* 2 */
/*!**************************!*\
  !*** ./scss/styles.scss ***!
  \**************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[[0,1,2]]]);
//# sourceMappingURL=app.js.map