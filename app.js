const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (req, res) {
  res.send('hello T Tettey');
});

app.listen(port, function () {
  console.log('App listening on port ' + port);
});
app.get('/roehampton', function (req, res) {
  console.log(req.url);
  res.send('hello roehampton');
});