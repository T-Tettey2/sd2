const express = require('express');

const app = express();
app.set('view engine', 'pug');
app.set('views', './app/views');
const port = 3000;

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/', function (req, res) {
  res.render('index', {
    pageTitle: 'T Tettey - SD2 Pug',
    heading: 'Welcome to my Pug page',
    items: ['HTML', 'Express', 'Docker', 'Pug', 'MySQL']
  });
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

app.get('/db_test/:id', function (req, res) {
  const studentId = req.params.id;

  pool.query('SELECT * FROM test_table WHERE id = ?', [studentId], function (err, results) {
    if (err) {
      console.log(err);
      res.status(500).send('Database error');
      return;
    }

    if (results.length === 0) {
      res.send('<h1>No record found for ID ' + studentId + '</h1>');
      return;
    }

    const record = results[0];
    res.send(
      '<div style="font-family: sans-serif; text-align: center; margin-top: 50px;">' +
      '<h1 style="color: #2c3e50;">Record Found</h1>' +
      '<p style="font-size: 20px;">ID: <strong>' + record.id + '</strong></p>' +
      '<p style="font-size: 20px;">Name: <strong>' + record.name + '</strong></p>' +
      '</div>'
    );
  });
});