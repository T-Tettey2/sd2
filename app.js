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
app.get('/hello/:name', function (req, res) {
  console.log(req.params);
  res.send('hello ' + req.params.name);
});

app.get('/user/:id', function (req, res) {
  res.send('User ID: ' + req.params.id);
});

app.get('/student/:name/:id', function (req, res) {
  res.send('Student Name: ' + req.params.name + ', Student ID: ' + req.params.id);
});