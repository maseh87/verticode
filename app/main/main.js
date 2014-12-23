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
    });

  authProvider.init({
    domain: '33m.auth0.com',
    clientID: 'ORkiU7BYEfMQd2MvLMGmUzzXSuax84Gv'
  });

  $urlRouterProvider.otherwise('/login');
}])

.run(['auth', 'store', '$state', 'jwtHelper', '$rootScope', function (auth, store, $state, jwtHelper, $rootScope) {
  // This hooks al auth events to check everything as soon as the app starts

  auth.hookEvents();

  $rootScope.$on('$stateChangeStart', function(e, next, nextParams, fromState, fromParams) {
    
    if(next.authenticate && !auth.isAuthenticated) {
      var token = store.get('token');
      if(token) {
        if(!jwtHelper.isTokenExpired(token)) {
          auth.authenticate(store.get('profile'), token);
        }else {
          // Either show Login page or use the refresh token to get a new idToken
          $state.go('main.login');
        }
      } else {
        $state.go('main.login');
      }
    }   
  });


}]);