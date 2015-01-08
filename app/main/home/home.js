angular.module('main.home', [])

.config(['$stateProvider', '$httpProvider' ,function($stateProvider, $httpProvider) {
	$stateProvider
		.state('main.home', {
			url: 'home',
			templateUrl: 'main/home/home.tpl.html',
			controller: 'HomeCtrl',
			authenticate: true
		});
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

}])
.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {


  // $scope.serverTest = function() {
  //   $http({
  //     method: 'GET',
  //     url: ''
  //   }).then(function(response) {
  //     console.log(response.data);
  //   });
  // };
	
}]);