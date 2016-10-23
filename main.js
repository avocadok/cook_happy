var express = require('express');
var server = express();
var exphbs  = require('express-handlebars');

server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

server.use(express.static('static'));

server.get('/', function (req, res) {
  res.render('home');
});

server.get('/przepisy', function (req, res) {
  res.render('przepisy');
});


server.listen(80);
