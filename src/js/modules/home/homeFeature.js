var homeFeature = (function() {

	var utility = require('../global/utility.js');

	function init() {
		utility.log("home page init");
	}

	return {
		init: init
	}
})();

module.exports = homeFeature;