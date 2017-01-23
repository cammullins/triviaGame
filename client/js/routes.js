myApp.config(function($locationProvider, $routeProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: "partials/login.html"
    })
    .when('/dashboard', {
      templateUrl: "partials/dashboard.html"
    })
    .when('/new_question', {
      templateUrl: "partials/new_question.html"
    })
    .when('/lets_play', {
      templateUrl: "partials/lets_play.html"
    })
    .when('/poo',{
             templateUrl: 'partials/poo.html',
             controller: 'pooController'
        })
    .otherwise({
      redirectTo: '/'
    })
})
