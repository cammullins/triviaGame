var UserSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2},
  scores: [{type: Number}],
}, {timestamps: true});

mongoose.model('User', UserSchema)
