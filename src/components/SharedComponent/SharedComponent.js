require('./SharedComponent.scss');
// require("../HomeFeature2/HomeFeature2.scss");

/*****************************************************************************
 * Example shared component used across multiple entry pages
 *****************************************************************************/
class SomeSharedComponent {

	constructor() {
		this.render();
	}

	render() {
		var debug = document.createElement('div');
		debug.className = 'SharedComponent';
		debug.innerHTML = 'This is a Shared Component';
		document.getElementById('content').appendChild(debug);
	}
}

export default SomeSharedComponent;