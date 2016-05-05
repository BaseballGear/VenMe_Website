var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('port', (process.env.PORT || 5000));

var http = require('http').createServer(app).listen(app.get('port'), function()
{
    console.log('Server running.');
});

app.use(express.static(__dirname));

//404 Page
app.use(function(req, res)
{
  console.log("404 Error");
  res.status(404).send("Not Found");
  //res.sendFile(__dirname + 404.html');
});
