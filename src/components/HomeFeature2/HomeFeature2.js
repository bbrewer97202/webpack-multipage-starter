import { debug } from '../../utility/logging';

require("./HomeFeature2.scss");

/*****************************************************************************
 * Example "Home" Feature Component #2
 *****************************************************************************/
class HomeFeature2 {

	constructor() {
		this.render;
	}

	render() {
		var debug = document.createElement('div');
		debug.innerHTML = 'appended by Home Feature 2';
		debug.className = 'HomeFeature2-copy';
		document.getElementsByClassName('HomeFeature2')[0].appendChild(debug)
	}
}

export default HomeFeature2;