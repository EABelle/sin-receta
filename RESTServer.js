var http = require('http');
var https = require('https');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

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

function downloadFile(req, res, secondPath){
  var file = __dirname + '/public/'+secondPath+req.params.fileParam;

  var filename = path.basename(file);
  var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', mimetype);

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);
}

app.get('/download/:fileParam', function(req, res){
  downloadFile(req, res, '');
});

app.get('/download/momento/:fileParam', function(req, res){
  downloadFile(req, res, 'momento/');
});

app.get('/download/noticia/:fileParam', function(req, res){
  downloadFile(req, res, 'noticia/');
});

var httpServer = http.createServer(app);
var port = 3001;

// // INICIO DEL SERVER
// // =============================================================================
var logStr = 'Corriendo en puerto: ' + port
httpServer.listen(port, function() {
  console.log(logStr);
});
