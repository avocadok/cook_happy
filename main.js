var express = require('express');
var server = express();
var exphbs = require('express-handlebars');
var recipeList = require('./recipes.json');

server.engine('handlebars', exphbs({defaultLayout: 'main'}));
server.set('view engine', 'handlebars');

server.use(express.static('static'));

server.get('/', function (req, res) {
  res.render('home');
});

server.get('/przepisy', function (req, res) {
  res.render('recipe-list', {
    recipes: recipeList
  });
});

server.get('/przepisy/:id', function (req, res) {
  var foundRecipe = recipeList.find(function (r) {
    return r.id == req.params.id;
  });

  res.render('recipe', foundRecipe);
});

server.listen(80);
