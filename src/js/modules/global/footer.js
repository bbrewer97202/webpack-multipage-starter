var footer = (function() {

	var utility = require('./utility');

	function init() {
		utility.log("footer init");
	}

	return {
		init: init
	}

})();

module.exports = footer;