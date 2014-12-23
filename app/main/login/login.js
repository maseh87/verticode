angular.module('main.login', [])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('main.login', {
      url: 'login',
      controller: 'LoginCtrl'
    });
}])

.controller('LoginCtrl', ['$scope', 'AuthFactory', '$state', function ($scope, AuthFactory, $state) {
  $scope.signin = function() {
    console.log('signing in')
    AuthFactory.login()
      .then(function(profile) {
        $state.go('main.home');
      }).catch(function(err) {
        console.log(err);
      });
  };
  $scope.signin();
}]);