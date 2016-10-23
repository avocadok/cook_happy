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
  var przepis = {
    nazwa:'biszkopt z czekolada',
    instrukcja:'dodaj mleko do kakao , czekolade masz wspaniala',
    skladniki:['mleko','kakao','czekolada','jajka'],
  }
  res.render('przepisy',przepis);
});


server.listen(80);
