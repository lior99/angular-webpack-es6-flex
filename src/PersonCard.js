class PersonCardController {
	constructor(){
	}
}

function directiveFunction() {
		return {
			restrict : 'E',
			template : `
					<div>
						<div class="person-name">{{ ::ctrl.person.name }}</div>
						<div class="company">{{ ::ctrl.person.company }}</div>
						<div class="email">{{ ::ctrl.person.email }}</div>
					</div>
			`,
			bindToController : {
				person : '='
			},
			// transclude : true,
			replace :true,
			controllerAs : 'ctrl',
			controller:PersonCardController
		}
}


export default directiveFunction;