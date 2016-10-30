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

////widok pojedynczego przepisu (route rut poj. przepisu)
server.get('/przepisy/:id', function (req, res, next) {
  var foundRecipe = recipeList.find(function (r) {
    return r.id == req.params.id;
  });

  if (foundRecipe) {
    res.render('recipe', foundRecipe);
  } else {
    next(true);
  }
});

// server.get('*', function(req, res) {
//   res.send('what???', 404);
// }); - ostatni rout ktory lapie wszystkie inne zapytana ktore nie zastaly obsluzone do tej pory ('nie ma takiej strony')

//ten rout obsluguje wszystkie requesty ktorych nie obsluzyl zaden inny rout
server.use(function(req,res){
  res.status(404);
  res.render('404');
});

server.use(function(err, req, res, next){
  res.status(404);
  res.render('404');
})

server.listen(80);
