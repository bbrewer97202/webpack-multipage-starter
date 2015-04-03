import { log } from '../../utility/logging';
import HomeFeature1 from '../../components/HomeFeature1/HomeFeature1';
import HomeFeature2 from '../../components/HomeFeature2/HomeFeature2';
import SharedComponent from '../../components/SharedComponent/SharedComponent';

require("./home.scss");

/*****************************************************************************
 * home page 
 *****************************************************************************/
class Home {

	constructor() {

		log("home page constructor");

		var homeFeature1 = new HomeFeature1();
		var homeFeature2 = new HomeFeature2();
		var sharedComponent = new SharedComponent();
	}
}

new Home();