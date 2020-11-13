require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/mariadb.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ROUTES
app.get('/api/products/:id/details ', (req, res) => {

});

app.get('/api/products/:id/questions', (req, res) => {

});

app.get('/api/products/:id/answers', (req, res) => {

});

app.post('/api/products/:id/questions', (req, res) => {

});

app.post('/api/products/:id/answers', (req, res) => {

});

app.put('/api/product/:id/helpful', (req, res) => {

});

app.put('/api/product/:id/not-helpful', (req, res) => {

});

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});