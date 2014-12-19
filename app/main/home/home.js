angular.module('main.home', [])

.config(['$stateProvider' ,function($stateProvider) {
	$stateProvider
		.state('main.home', {
			url: 'main/home',
			templateUrl: 'main/home/home.tpl.html',
			controller: 'HomeCtrl'
		});
}])
.controller('HomeCtrl', ['$scope', function ($scope) {
	
}]);