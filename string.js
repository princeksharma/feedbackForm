const express = require('express');
var app = express();

app.get('/', (req, res) => {
  var s1 = String("Prince");
  var s2 =  String("nice");
  var a = s1.tokenize();
  var b = s2.tokenize();
  if (b.compareTo(a)){
    console.log('Found');

  }

});

app.listen(3000,() => {
  console.log('port is up at 3000');
});
