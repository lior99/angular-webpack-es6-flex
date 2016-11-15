import DataService from './DataService';
import $timeout from 'angular';

class MainController  {
	constructor(DataService, $timeout) {
		this.list = [];
		this.service = DataService;
		this.$timeout = $timeout;

		this.initList();

		this.filter = '';
	}

	initList() {
		this.service.getData()
			.then((data) => {
				this.$timeout(() => {
					data.forEach((employee) => {
						this.list.push(this.service.createEmployeeObject(employee));
					});
				});
			})
			.catch((err) => {
				console.error('there was a problem', err);
			});
	}
}

MainController.$inject = ['DataService', '$timeout']; //used for minification

export default MainController;
