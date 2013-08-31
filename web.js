var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World 2!');
  var k = fs.readFileSync('./index.html','utf8');
  response.send( k );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

buf = new Buffer(256);
console.log(buf.toString('utf8', 0, len));
});
