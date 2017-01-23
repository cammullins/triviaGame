myApp.factory('QuestionFactory', function($http){
  var factory = {};
  var messages = [];

  factory.getMessages = function(callback){
    callback(messages);
    messages = [];
  };

  factory.createQuestion = function(newQuestion, callback){
    $http.post('/questions', newQuestion).then(function(response){
      if(response.data.status){
        messages.push(response.data.message)
      }
      callback(response);
    })
  };
  factory.getQuestions = function(callback){
    $http.get('/questions').then(function(response){
      callback(response.data);
    })
  }
  factory.quizFinish = function(answers, callback){
    $http.post('/quiz', answers).then(function(response){
      if(response.data.status){
        messages.push(response.data.message);
      }
      callback(response);
    })
  }

  return factory;
})
