import { log } from '../../utility/logging';
import SharedComponent from '../../components/SharedComponent/SharedComponent';
import UniqueFeature from '../../components/UniqueFeature/UniqueFeature';

require("./catalog.scss");

/*****************************************************************************
 * catalog type entry page 
 *****************************************************************************/
class CatalogEntryPage {

	constructor() {

		$(document).ready(this.onDOMReady);

		log("CatalogEntryPage page constructor");
	}

	onDOMReady() {
		
		var sharedComponent = new SharedComponent();
		var uniqueFeature = new UniqueFeature();

		uniqueFeature.testUnderscoreImport();
	}
}

new CatalogEntryPage();