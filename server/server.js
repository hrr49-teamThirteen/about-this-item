require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/mariadb.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ROUTES
app.get('/api/products/details', (req, res) => {
  db.getAllDetails((err, data) => {
    if (err) {
      console.error('ERROR: ', err);
    }
    res.status(200).send(data);
  });
});

app.get('/api/products/questions', (req, res) => {

});

app.get('/api/products/answers', (req, res) => {

});

app.post('/api/products/questions', (req, res) => {

});

app.post('/api/products/answers', (req, res) => {

});

app.put('/api/product/helpful', (req, res) => {

});

app.put('/api/product/not-helpful', (req, res) => {

});

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});