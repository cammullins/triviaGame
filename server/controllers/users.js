var User = mongoose.model('User');

module.exports = (function(){
  return{

    index: function(req, res){
      User.find({scores: {$not:{$size: 0} }}, function(err, scores){
        if (err){
          console.log(err);
        }else{
          res.json(scores)
        }
      })
    },

    create: function(req, res){
      var user = new User(req.body);
      user.save(function(err){
        if (err){
          res.json({status: false, errors:"Pick a Better Username"});
        }else{
          sessionUser = {
            user_id: user._id,
            username: user.name,
            loggedIn: true
          }
          res.json({status: true, sessionUser: sessionUser});
        }
      })
    },

    quiz: function(req, res){
      User.findByIdAndUpdate({_id: req.body.user}, {$push: {scores: req.body.score}}, function(err){
        if(err){
          res.json({status: false, errors: "Error saving Score"});
        }else{
          res.json({status: true, message: "You answered " + req.body.score + " questions out of 3 correctly for a score of " + Math.floor(req.body.score/3*100) + "%"})
        }
      })
    },

    logout: function(req, res){
        sessionUser = {loggedIn: false};
        res.json({status: true, sessionUser: sessionUser})
    }
  }
})();
