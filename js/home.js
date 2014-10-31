webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var homeFeature = __webpack_require__(3);

	homeFeature.init();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var homeFeature = (function() {

		var utility = __webpack_require__(7);

		function init() {
			utility.log("home page init");
		}

		return {
			init: init
		}
	})();

	module.exports = homeFeature;

/***/ }
]);