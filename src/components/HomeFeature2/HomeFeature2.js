require("./HomeFeature2.scss");

/*****************************************************************************
 * Example "Home" Feature Component #2
 *****************************************************************************/
class HomeFeature2 {

	constructor() {
		this.render();
	}

	render() {
		var element = document.createElement('div');
		var child = document.createElement('p');
		element.className = 'HomeFeature2'
		child.className = 'HomeFeature2-copy';
		child.innerHTML = 'Home Feature 2';
		element.appendChild(child);
		document.getElementById('content').appendChild(element);
	}	
}

export default HomeFeature2;