import $ from 'jquery';
import _ from 'underscore';
import bootstrap from 'bootstrap';
import { log, debug } from '../../utility/logging';

/*****************************************************************************
 * Unique special feature component
 *****************************************************************************/
class UniqueFeature {

	constructor() {
		this.render();
	}

	render() {
		debug('Special Feature appears only on this page: uses Bootstrap and Underscore');
		this.testBootstrapImport();
	}

	/**
	 * test bootstrap + jquery
	 */
	testBootstrapImport() {

		$('body').append('<div id="egModal" class="modal fade"><div class="modal-dialog"><div class="modal-content">Example Modal</div></div></div>');

		var button = $('<button class="btn btn-primary">button</button>');
		$('#content').append(button);
		button.on('click', this.onBootstrapButtonClick);
	}

	/**
	 * handle clicks to test bootstrap button
	 */
	onBootstrapButtonClick(e) {
		e.preventDefault();
		$('#egModal').modal();
	}

	/**
	 * test underscore import
	 */
	testUnderscoreImport() {

		//test underscore import
		var underscoreTest = _.last([34,1,55,2,20], 1);		
		debug('underscore test result: ' + underscoreTest);
	}
}

export default UniqueFeature;
