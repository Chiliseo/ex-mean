//init SERVER
var express = require('express');
var app = express();
var os = require('os');
//init SWIG
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);
swig.setDefaults({ cache: false });
app.use(express.Router());
app.use(express.static(__dirname + '/public'));
//Clases para Insert Update and Delete
var _clsGet =require('./lib/GetClass');
var _clsPost=require('./lib/PostClass');
var _clsPut =require('./lib/PutClass');
var _clsDel =require('./lib/DelClass');
var util = require("util");
var getClass = new _clsGet();

app.get('/', function (req, res) {
	getClass.mostrar(req,res);
});
app.post('/', function (req, res) {
  res.send('Got a POST request');
})

// Actualizar
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
})

// Borrar
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
})

var server = app.listen(3000, function () {

  var host = server.address().ip;
  var port = server.address().port;
// || "127.0.0.1";
  console.log('Node Application lisent on PORT %s',port);

});



