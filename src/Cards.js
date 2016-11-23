class Cards {
	constructor(){
	}
}

function cards(){
	return {
		restrict : 'E',
		template : `			
				<div ng-repeat="employee in vm.items | filter:vm.filter" class="employee">
					<employee-card employee="employee"></employee-card>
				</div>
		`,
		bindToController : {
			items : "=",
			filter : '='
		},
		controllerAs : 'vm',
		controller : Cards,
		// transclude:true,
		replace :true
	}
}



export default cards;