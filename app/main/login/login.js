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
    AuthFactory.login()
      .then(function(profile) {
        console.log('signing in', profile);
        $state.go('main.home');
      }).catch(function(err) {
        console.log(err);
      });
  };
  $scope.signin();
}]);