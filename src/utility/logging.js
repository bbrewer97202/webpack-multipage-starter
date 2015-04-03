export function debug(msg) {
	var debug = document.createElement('div');
	debug.innerHTML = msg;
	//document.getElementsByTagName('body')[0].appendChild(debug);		
	document.getElementById('content').appendChild(debug);
}

export function log(msg) {
	console.log("log: " + msg);
}
