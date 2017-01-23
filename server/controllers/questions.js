var Question = mongoose.model('Question');

module.exports = (function(){
  return{
    index: function(req, res){
      Question.aggregate({$sample: { size: 3 }}, function(err, quizQuestions){
        if(err){
          console.log(err);
        }else{
          res.json(quizQuestions)
        }
      })
    },
    create: function(req, res){
      var question = new Question(req.body);
      question.save(function(err){
        if (err){
          console.log(err.errors);
          var errorsArr = [];
          for (var i in err.errors){
            if (err.errors[i].message.includes("is shorter than the minimum allowed length (2)"))
              errorsArr.push("Answers must be longer than 2 characters");
            if (err.errors[i].message.includes("is shorter than the minimum allowed length (10)"))
              errorsArr.push("Question must be longer than 10 characters");
            else errorsArr.push("Each field is required to submit")
          }
          res.json({status: false, errors: errorsArr})
        }else{
          res.json({status: true, message: "Question Added Successfully"});
        }
      })
    }

  }
})();
