angular.module('services', [])

.factory('AuthFactory', function(auth, store, $q) {
	var login = function() {
    var defer = $q.defer();
    auth.signin({
      popup: true,
      standalone: true,
      authParams: {
        scope: 'openid offline_access',
        // device: 'Mobile device'
      }
    }, function(profile, token, accessToken, state, refreshToken) {
      console.log(profile, 'profile')
      console.log(token, 'token')
      console.log(refreshToken, 'refreshToken')

      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      store.set('refreshToken', refreshToken);
      defer.resolve(profile);
    }, function(err) {
      // Error callback
      defer.reject(err);
    });
    return defer.promise;
  };

  return {
    login: login
  };
});