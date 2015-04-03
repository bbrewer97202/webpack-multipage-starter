import { debug } from '../../utility/logging';

require("./HomeFeature1.scss");

/*****************************************************************************
 * Example "Home" Feature Component #1
 *****************************************************************************/
class HomeFeature1 {

	constructor() {
		this.render();
	}

	render() {
		//debug('created by home feature 1');
		var element = document.createElement('div');
		var child = document.createElement('p');
		element.className = 'HomeFeature1'
		child.className = 'HomeFeature1-copy';
		child.innerHTML = 'Home Feature 1';
		element.appendChild(child);
		document.getElementById('content').appendChild(element);
	}
}

export default HomeFeature1;