var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  var k = fs.readFileSync('index.html');
  var text = k.toString('ascii');
 response.send( text );
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});


