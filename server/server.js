require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('../db/mariadb.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ROUTES
app.get('/api/products/:id/details', (req, res) => {
  db.getAllDetails((err, data) => {
    if (err) {
      throw new Error('ERROR: ', err);
    }
    res.status(200).send(data);
  });
});

app.get('/api/products/:id/questions', (req, res) => {
  db.getAllQuestions((err, data) => {
    if (err) {
      throw new Error('ERROR: ', err);
    }
    res.status(200).send(data);
  });
});

app.get('/api/products/:id/answers', (req, res) => {
  db.getAllAnswers((err, data) => {
    if (err) {
      throw new Error('ERROR: ', err);
    }
    res.status(200).send(data);
  });
});

app.post('/api/products/:id/questions', (req, res) => {
  db.addQuestion(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
      throw new Error('ERROR: ', err);
    }
    res.status(201).send(data);
  });
});

app.post('/api/products/:id/answers', (req, res) => {
  db.addAnswer(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
      throw new Error('ERROR: ', err);
    }
    res.status(201).send(data);
  });
});

app.put('/api/products/:id/helpful', (req, res) => {
  db.updateHelpful(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
      throw new Error('ERROR: ', err);
    }
    res.status(200).send(data);
  });
});

app.put('/api/products/:id/not-helpful', (req, res) => {
  db.updateNotHelpful(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
      throw new Error('ERROR: ', err);
    }
    res.status(200).send(data);
  });
});

app.get('/test', (req, res) => {
  res.status(200).json({ message: 'pass!' });
});

// let port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Now listening on port ${port}`);
// });

module.exports = {
  app
};