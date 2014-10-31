webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var nav = __webpack_require__(5);
	var footer = __webpack_require__(6);


	nav.init();
	footer.init();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var nav = (function() {

		var utility = __webpack_require__(7);

		function init() {
			utility.log("nav init");

			//make use of jquery for some reason
			$(document).trigger('someevent');
		}

		return {
			init: init
		}
	})();

	module.exports = nav;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var footer = (function() {

		var utility = __webpack_require__(7);

		function init() {
			utility.log("footer init");
		}

		return {
			init: init
		}

	})();

	module.exports = footer;

/***/ }
]);