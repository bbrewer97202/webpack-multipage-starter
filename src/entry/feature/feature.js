import { log } from '../../utility/logging';
import SharedComponent from '../../components/SharedComponent/SharedComponent';
import UniqueFeature from '../../components/UniqueFeature/UniqueFeature';

require("./feature.scss");

/*****************************************************************************
 * special feature page 
 *****************************************************************************/
class SpecialFeature {

	constructor() {

		$(document).ready(this.onDOMReady);

		log("SpecialFeature page constructor");
	}

	onDOMReady() {
		
		var sharedComponent = new SharedComponent();
		var uniqueFeature = new UniqueFeature();

		uniqueFeature.testUnderscoreImport();
	}
}

new SpecialFeature();