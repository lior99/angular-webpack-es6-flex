import DataService from './DataService';
import $timeout from 'angular';

class MainController  {
	constructor(DataService, $timeout) {
		this.list = [];
		this.service = DataService;
		this.$timeout = $timeout;

		this.initList();

		this.sampleString = 'this is my string';
		this.changeString($timeout);
	}

	initList() {
		this.service.getData()
			.then((data) => {
				this.$timeout(() => {
					data.forEach((p) => {
						this.list.push(this.service.createPersonObject(p));
					});
				});
			})
			.catch((err) => {
				console.error('there was a problem', err);
			});
	}

	changeString() {
		// setTimeout(() => {
		this.$timeout(() => {
			this.sampleString = 'Now i have changed the string!!!!';
		}, 2000);
	}
}

MainController.$inject = ['DataService', '$timeout']; //used for minification

export default MainController;
