  angular.module('main.auth', [])

.factory('AuthFactory', ['auth', 'store', '$q', function(auth, store, $q) {

  var login = function() {
    var defer = $q.defer();
    auth.signin({}, function(profile, token) {
      console.log(profile, 'profile');
      console.log(token, 'token');

      // Success callback
      store.set('__profile', profile);
      store.set('__token', token);
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
}]);




