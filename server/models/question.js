var QuestionSchema = new mongoose.Schema({
  question: {type: String, required: true, minlength: 10},
  correctAnswer: {type: String, required: true, minlength: 2},
  fakeAnswer1: {type: String, required: true, minlength: 2},
  fakeAnswer2: {type: String, required: true, minlength: 2}
}, {timestamps: true});

mongoose.model('Question', QuestionSchema)
