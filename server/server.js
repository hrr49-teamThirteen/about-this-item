
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const db = require('../db/dbFunctions.js');

app.use(express.static(__dirname + '/../public/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

// API ROUTES
app.get('/api/products/:id/details', (req, res) => {
  db.getAllDetails(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
    }
    res.status(200).send(data);
  });
});

app.get('/api/products/:id/questions', (req, res) => {
  db.getAllQuestions(req.params.id, (err, data) => {
    if (err) {
      console.error(err);
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

app.delete('/api/products/:id', (req, res) => {
  db.deleteProduct(req.params.id, (err, data) => {
    if (err) {
      res.status(400).send(err);
      console.error(err);
    }
    res.status(200).send(`product with id of ${req.params.id} is deleted!`);
  })
})

// app.get('/test', (req, res) => {
//   res.status(200).json({ message: 'pass!' });
// });

// let port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Now listening on port ${port}`);
// });

module.exports = {
  app
};