myApp.controller('playController', function($scope, $location, UserFactory, QuestionFactory){

$scope.sessionUser;
$scope.errors = [];

  UserFactory.getSessionUser(function(response){
    $scope.sessionUser = response;
    if(!$scope.sessionUser.loggedIn){
      $location.url('/');
    }
  })

  QuestionFactory.getQuestions(function(response){
    $scope.quizQuestions = response;
  })

  $scope.goback = function(){
    $location.url('/dashboard');
  }

  $scope.submitAnswers = function(){
    var res = checkScore($scope.answers, $scope.quizQuestions);
    QuestionFactory.quizFinish({user: $scope.sessionUser.user_id, score: res}, function(response){
      if (!response.data.status){
        $scope.errors.push(response.data.errors);
      }else{
        $location.url('/dashboard')
      }
    })
  }

var checkScore = function(a, b){
  var score = 0;
  for (var i in a){
    if (a[i].answer === b[i].correctAnswer){
      score++;
    }
  }
  return score;
}

})
