var http = require('http');
var https = require('https');
var fs = require('fs');

var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  next();
});

app.use(express.static('../../public'));

var httpServer = http.createServer(app);
var port = 3000;

// // INICIO DEL SERVER
// // =============================================================================
var logStr = 'Corriendo en puerto: ' + port
httpServer.listen(port, function() {
  console.log(logStr);
});
