angular.module('verticode', [
  'lumx',
  'auth0',
  'angular-storage',
  'angular-jwt',
  'ui.router',
  'main.services',
  'main.auth',
  'main.login',
  'main.home'
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
    clientID: 'ORkiU7BYEfMQd2MvLMGmUzzXSuax84Gv'
  });

  $urlRouterProvider.otherwise('/main/home');
}])

.run(['auth', 'store', '$state', 'jwtHelper', function (auth, store, $state, jwtHelper) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
  if (!auth.isAuthenticated) {
    var token = store.get('token');
    if (token) {
      console.log('Logged in fool')
      if (!jwtHelper.isTokenExpired(token)) {
        auth.authenticate(store.get('profile'), token);
      } else {
        // Either show Login page or use the refresh token to get a new idToken
        $state.go('main.login');
      }
    }
  }
}]);