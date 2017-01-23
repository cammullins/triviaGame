var express = require('express'),
    bp      = require('body-parser'),
    path    = require('path');
mongoose    = require('mongoose');
var app     = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('Listening on 8000');
})
