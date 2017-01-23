myApp.controller('playController', function($scope, $location, UserFactory, QuestionFactory){

$scope.sessionUser;
$scope.errors = [];

  UserFactory.getSessionUser(function(response){
    $scope.sessionUser = response;
    if(!$scope.sessionUser.loggedIn){
      $location.url('/');
    }
  });

  QuestionFactory.getQuestions(function(response){
    $scope.quizQuestions = response;
  });

  $scope.goback = function(){
    $location.url('/dashboard');
  };
  $scope.submitAnswers = function(){
    var res = checkScore();
    QuestionFactory.quizFinish({user: $scope.sessionUser.user_id, score: res}, function(response){
      if (!response.data.status){
        $scope.errors.push(response.data.errors);
      }else{
        $location.url('/dashboard')
      }
    })
  }

var checkScore = function(){
  var score = 0;
  var playerAns = $scope.answers;
  var correctAns = $scope.quizQuestions;
  for (var i in playerAns){
    if (playerAns[i].answer === correctAns[i].correctAnswer){
      score++;
    }
  }
  return score;
}

})
