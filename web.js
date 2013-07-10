var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var buff1 = new Buffer();
    response.send(buff1.toSTring(fs.readFileSync("index.html"),'utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
