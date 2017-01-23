myApp.controller('DashboardController', function($scope, $location, UserFactory, QuestionFactory){

  $scope.errors = [];
  $scope.messages = [];

  QuestionFactory.getMessages(function(response){
    $scope.messages = response;
  });

  UserFactory.getScores(function(response){
    $scope.scores = response;
  });

  UserFactory.getSessionUser(function(response){
    $scope.sessionUser = response;
    if(!$scope.sessionUser.loggedIn){
      $location.url('/');
    }
  });

  $scope.logout = function(){
    UserFactory.logout(function(response){
      if (response.status){
        $scope.sessionUser = response.sessionUser;
        $location.url('/');
      }else{
        $scope.errors.push(response.errors);
      }
    })
  }

  $scope.playButton = function(){
    $location.url('/lets_play');
  }


})
