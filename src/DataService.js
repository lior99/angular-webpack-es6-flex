import axios from "axios";

class DataService  {
	constructor() {
	}

	getData() {
		const url = `http://www.filltext.com/?rows=200&firstName={firstName}&lastName={lastName}&company={business}&email={email}&pretty=true`;

		// wrapping in a promise so getData will ALWAYS
		// return a promise to whoever calls it
		// --------------------------------------------
		return new Promise((resolve, reject) => {
			axios(url)
				.then((response) => {
					resolve(response.data.map(this.createEmployeeObject));
				})
				.catch((err) => {
					reject(err);
				});
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