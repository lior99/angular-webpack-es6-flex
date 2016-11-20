import $ from "jquery";

class DataService  {
	constructor() {
	}

	//fetch data
	getData() {
		const url = `http://www.filltext.com/?rows=200&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true`;

		return new Promise((resolve, reject) => {
			$.get(url, (response) => {
					resolve(response.map(this.createEmployeeObject));
				})
				.fail(reject);
		});
	}

	createEmployeeObject(rawPersonObject) {
		return {
			name : `${ rawPersonObject.firstName } ${ rawPersonObject.lastName }`,
			firstName : rawPersonObject.firstName,
			lastName : rawPersonObject.lastName,
			company : rawPersonObject.company,
			email : rawPersonObject.email
		}
	}
}

export default DataService;