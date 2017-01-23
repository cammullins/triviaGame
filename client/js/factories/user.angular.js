myApp.factory('UserFactory', function($http){
  var factory = {};
  var sessionUser = {loggedIn: false};

  factory.getSessionUser = function(callback){
    callback(sessionUser);
  }

  factory.createUser = function(userInfo, callback){
    $http.post('/create', userInfo).then(function(response){
      if(response.status){
        sessionUser = response.data.sessionUser;
      }
      callback(response);
    })
  }

  factory.getScores = function(callback){
    $http.get('/scores').then(function(response){
      callback(response.data);
    })
  }

  factory.logout = function(callback){
      $http.get('/logout').then(function(response){
        if(response.status){
          sessionUser = response.sessionUser;
        }
        callback(response);
      })
    }
  return factory;
})
