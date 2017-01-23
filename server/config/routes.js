var users = require('./../controllers/users.js')
var questions = require('./../controllers/questions.js')

module.exports = function(app){
  // <!--Users Controller-->
  app.post('/create', users.create);
  app.get('/logout', users.logout);
  app.post('/quiz', users.quiz);
  app.get('/scores',users.index);
  //<--Question Controller-->
  app.post('/questions', questions.create);
  app.get('/questions', questions.index);

}
