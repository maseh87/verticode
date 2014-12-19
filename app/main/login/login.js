angular.module('main.login', [])

.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('main.login', {
			url: 'login',
			templateUrl: 'main/login/login.tpl.html',
			controller: 'LoginCtrl'
		});
}])

.controller('LoginCtrl', ['$scope', 'AuthFactory', '$state', function ($scope, AuthFactory, $state) {
	$scope.signin = function() {
    	AuthFactory.login()
      	.then(function(profile) {
        	$state.go('app.main.orders');
      	}).catch(function(err) {
        	console.log(err);
      	});
 	};
  $scope.signin();
}]);