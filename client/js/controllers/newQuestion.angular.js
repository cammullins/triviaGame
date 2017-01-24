myApp.controller('newQuestionController', function($scope, $location, UserFactory, QuestionFactory){

  $scope.goback = function(){
    $location.url('/dashboard');
  }

  $scope.createQuestion = function(){
    $scope.errors = [];
    QuestionFactory.createQuestion($scope.newQuestion, function(response){
      if (!response.data.status){
        var err = response.data.errors;
        var prev = err[0];
        $scope.errors.push(prev);
        for (var idx = 1; idx < err.length; idx++){
          if (err[idx] == prev){
            prev = err[idx];
            console.log(prev);
          }else{
            $scope.errors.push(err[idx]);
            prev = err[idx];
          }
        }
        console.log($scope.errors);
      }else{
        $location.path('/dashboard')
      }
    })
  }

  $scope.logout = function(){
    UserFactory.logout(function(response){
      if (response.status){
        $scope.sessionUser = response.sessionUser;
        $location.url('/');
      }else{
        self.errors.push(response.errors);
      }
    })
  }
})
