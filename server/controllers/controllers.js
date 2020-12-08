const { db } = require('../../databases/postgres/index.js');

// ---------- GET REQUEST FUNCTIONS ---------- //

exports.getProductDetails = (id, cb) => {
  const query = 'SELECT p.id, p.name, h.text, s.spec_name, s.value FROM products as p LEFT OUTER JOIN highlights as h ON p.id = h.product_id LEFT OUTER JOIN specifications as s ON p.id = s.product_id WHERE p.id=($1);';
  db.query(query, [id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    // alter data to fit expected format
    const data = {};
    const responseData = res.rows;
    data.highlights = [];
    responseData.forEach(row => {
      if (!data.highlights.includes(row.text)) {
        data.highlights.push(row.text);
      }
    })
    data.specifications = {};
    responseData.forEach(row => {
      if (!data.specifications[row.spec_name]) {
        data.specifications[row.spec_name] = row.value;
      }
    })
    cb(null, data);
  })
};

exports.getAllQuestions = (id, cb) => {
  const query = 'SELECT * FROM questions as q WHERE q.product_id=($1);';
  db.query(query, [id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    cb(null, res.rows);
  })
};

exports.getAllAnswers = (id, cb) => {
  const query = 'SELECT * FROM answers as a WHERE a.product_id=($1);';
  db.query(query, [id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    cb(null, res.rows);
  })
};

// ---------- POST REQUEST FUNCTIONS ---------- //

exports.addQuestion = (body, id, cb) => {
  const query = 'INSERT INTO questions (user_name, question, created_at, product_id) VALUES ($1, $2, $3, $4);';
  const { user_name, question } = body;
  db.query(query, [user_name, question, new Date(), id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    cb(null, res);
  })
};

exports.addAnswer = (body, id, cb) => {
  const query = 'INSERT INTO answers (user_name, answer, created_at, helpful, not_helpful, question_id, product_id) VALUES ($1, $2, $3, $4, $5, $6, $7);'
  const { user_name, answer, question_id } = body;
  db.query(query, [user_name, answer, new Date(), 0, 0, question_id, id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    cb(null, res);
  })
};

// ---------- PUT REQUEST FUNCTIONS ---------- //

exports.updateHelpful = (body, id, cb) => {
  const query = 'UPDATE answers SET helpful = helpful + 1 WHERE id=($1);';
  db.query(query, [body.id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    cb(null, res);
  })
};

exports.updateNotHelpful = (body, id, cb) => {
  const query = 'UPDATE answers SET not_helpful = not_helpful + 1 WHERE id=($1);';
  db.query(query, [body.id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    cb(null, res);
  })
};

// ---------- DELETE REQUEST FUNCTIONS ---------- //

exports.deleteProduct = (id, cb) => {
  const query = 'DELETE FROM products WHERE id=($1);'
  db.query(query, [id], (err, res) => {
    if (err) {
      cb(err, null);
    }
    cb(null, res);
  })
};