angular.module('verticode', [
  'lumx',
  'auth0',
  'angular-storage',
  'angular-jwt',
  'ui.router'
])

.config(['authProvider', '$stateProvider', '$urlRouterProvider', function (authProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('main', {
      url: '/',
      template: '<ui-view></ui-view>',
      abstract: true
    })

  authProvider.init({
    domain: '33m.auth0.com',
    clientID: 'ORkiU7BYEfMQd2MvLMGmUzzXSuax84Gv',
    loginState: 'app.login'
  });

  $urlRouterProvider.otherwise('/main/home');
}])

.run(['auth', function (auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();

}])

.controller('LoginCtrl', ['$scope', 'store', '$location', 'auth', function ($scope, store, $location, auth) {
  $scope.login = function() {
    auth.signin({}, function(profile, token) {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      $location.path('/');
    }, function() {
      // Error callback
      console.log('Error in Login controller');
    });
  };
  $scope.login();
}]);