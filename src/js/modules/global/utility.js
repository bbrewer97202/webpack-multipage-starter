var utility = (function() {

	function debug(msg) {
		log(msg);
		alert(msg);
	}

	function log(msg) {
		console.log("log: " + msg);
	}

	return {
		debug: debug,
		log: log
	}

})();

module.exports = utility;