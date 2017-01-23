myApp.controller('loginController', function($scope, $location, UserFactory){
  $scope.errors = [];
  $scope.login = function(){
    UserFactory.createUser($scope.newUser, function(response){
      if(!response.data.status) {
        $scope.errors.push(response.data.errors);
      }else{
        $location.url('/dashboard');
      }
    })
  }
})
