angular.module('main.home', [])

.config(['$stateProvider' ,function($stateProvider) {
	$stateProvider
		.state('main.home', {
			url: 'home',
			templateUrl: 'main/home/home.tpl.html',
			controller: 'HomeCtrl',
			authenticate: true
		});
}])
.controller('HomeCtrl', ['$scope', function ($scope) {
	
}]);