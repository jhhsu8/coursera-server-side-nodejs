var express = require('express');
var morgan = require('morgan');
var hostname = 'localhost';
var port = 3000;
var app = express();

//add the morgan middleware for generating request’s logs in the server
app.use(morgan('dev'));

var dishrouter = require('./dishRouter');
var promorouter = require('./promoRouter');
var leaderrouter = require('./leaderRouter');

//load URI paths
app.use('/dishes',dishrouter);
app.use('/promotions',promorouter);
app.use('/leadership',leaderrouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});