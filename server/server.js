const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('./controllers/controllers.js');

const expressStaticGzip = require("express-static-gzip");

app.use('/build/client', expressStaticGzip('build/client', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res, path) {
     res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

app.use(express.static(`${__dirname}/../public/`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

// ---------- API ROUTES ---------- //

// GET API ROUTES

app.get('/api/products/:id/details', (req, res) => {
  db.getProductDetails(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    }
    res.status(200).send(data);
  });
});

app.get('/api/products/:id/questions', (req, res) => {
  db.getAllQuestions(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send(err);
    }
    res.status(200).send(data);
  });
});

app.get('/api/products/:id/answers', (req, res) => {
  db.getAllAnswers(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
    }
    res.status(200).send(data);
  });
});

// POST API ROUTES

app.post('/api/products/:id/questions', (req, res) => {
  db.addQuestion(req.body, req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.error(err);
    }
    res.status(201).send(data);
  });
});

app.post('/api/products/:id/answers', (req, res) => {
  db.addAnswer(req.body, req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.error(err);
    }
    res.status(201).send(data);
  });
});

// PUT API ROUTES

app.put('/api/products/:id/helpful', (req, res) => {
  db.updateHelpful(req.body, req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.error(err);
    }
    res.status(200).send(data);
  });
});

app.put('/api/products/:id/not-helpful', (req, res) => {
  db.updateNotHelpful(req.body, req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.error(err);
    }
    res.status(200).send(data);
  });
});

// DELETE API ROUTES

app.delete('/api/products/:id', (req, res) => {
  db.deleteProduct(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.error(err);
    }
    res.status(200).send(data);
  });
});

// app.get('/test', (req, res) => {
//   res.status(200).json({ message: 'pass!' });
// });

module.exports = {
  app,
};
