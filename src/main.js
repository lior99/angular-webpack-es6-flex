import angular from 'angular';
import MainController from './MainController'; 
import DataService  from './DataService';
import directiveFunction from './PersonCard';
import cards from './Cards';

angular
	.module('mainApp', [])
	.controller('mainController', MainController)
	.service('DataService', DataService)
	.directive('personCard', directiveFunction)
	.directive('cards', cards);

angular.bootstrap(document.querySelector('#app'), ['mainApp']);