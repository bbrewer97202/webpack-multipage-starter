var nav = (function() {

	var utility = require('./utility.js');

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