var express = require('express');
var server = express();

// server.get('/', function (request, response) {
//     response.send('hello hello');
// });

server.use(express.static('static'));


server.listen(80);
