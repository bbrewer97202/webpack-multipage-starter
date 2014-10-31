var about = (function() {

	var utility = require('../global/utility.js');

	function init() {
		utility.log("about page init");
	}

	return {
		init: init
	}

})();

module.exports = about;