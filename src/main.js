import "babel-polyfill";

import angular from 'angular';
import MainController from './MainController'; 
import DataService  from './DataService';
import directiveFunction from './EmployeeCard';
import cards from './Cards';


angular
	.module('mainApp', [])
	.controller('mainController', MainController)
	.service('DataService', DataService)
	.directive('employeeCard', directiveFunction)
	.directive('cards', cards);

angular.bootstrap(document.querySelector('#app'), ['mainApp']);

