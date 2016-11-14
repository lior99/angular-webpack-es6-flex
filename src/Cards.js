class Cards {
	constructor(){
	}
}

function cards(){
	return {
		restrict : 'E',
		template : `
			<div ng-repeat="person in vm.items" class="person">
				<person-card person="person"></person-card>
			</div>
		`,
		bindToController : {
			items : "="
		},
		controllerAs : 'vm',
		controller : Cards,
		// transclude:true,
		replace :true
	}
}



export default cards;