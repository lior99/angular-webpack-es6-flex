class EmployeeCardController {
	constructor(){
	}
}

function directiveFunction() {
		return {
			restrict : 'E',
			template : `
					<div>
						<div class="employee-name">{{ ::ctrl.employee.name }}</div>
						<div class="company">{{ ::ctrl.employee.company }}</div>
						<div class="email">{{ ::ctrl.employee.email }}</div>
					</div>
			`,
			bindToController : {
				employee : '='
			},
			// transclude : true,
			replace :true,
			controllerAs : 'ctrl',
			controller:EmployeeCardController
		}
}


export default directiveFunction;