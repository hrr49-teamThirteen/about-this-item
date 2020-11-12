require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/mariadb.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});