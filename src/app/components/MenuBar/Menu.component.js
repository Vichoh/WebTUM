(function () {
	'use strict';
	angular
	.module('app')
	.component('menuBar', {
		templateUrl: 'app/components/MenuBar/Menu.html',
		controller: menuCtrl,
		controllerAs: 'vm'
	});

	menuCtrl.$inject = ['$state'];

	function menuCtrl($state) {
		var vm = this;	
		
		
	}
})();