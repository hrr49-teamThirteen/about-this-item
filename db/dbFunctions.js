const {
  Product, Highlight, Specification, Question, Answer,
} = require('./mariadb.js');

// QUERIES

const getAllDetails = (id, callback) => {
  const data = {};
  Highlight.findAll({
    where: {
      product_id: id,
    },
  })
    .then((result) => {
      data.highlights = [];
      result.forEach((item) => {
        data.highlights.push(item.text);
      });
      Specification.findAll({
        where: {
          product_id: id,
        },
      })
        .then((specs) => {
          data.specifications = {};
          data.specifications['Item Number'] = id;
          specs.forEach((item) => {
            if (item.name.toLowerCase() === 'description') {
              data.description = item.value;
            } else {
              data.specifications[item.name] = item.value;
            }
          });
          callback(null, data);
        })
        .catch((err) => {
          callback(err);
        });
    })
    .catch((err) => {
      callback(err);
    });
};

const getAllQuestions = (id, callback) => {
  Question.findAll({
    where: {
      product_id: id,
    },
  })
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
};

const getAllAnswers = (id, callback) => {
  Answer.findAll({
    where: {
      product_id: id,
    },
  })
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
};

const addQuestion = (data, id, callback) => {
  Question.create({
    user_name: data.user_name,
    question: data.question,
    product_id: id,
  })
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
};

const addAnswer = (data, id, callback) => {
  Answer.create({
    user_name: data.user_name,
    question_id: data.question_id,
    answer: data.answer,
    product_id: id,
  })
    .then((result) => {
      callback(null, result);
    })
    .catch((err) => {
      callback(err);
    });
};

const updateHelpful = (data, id, callback) => {
  Answer.increment(
    'helpful',
    { by: 1, where: { answer_id: data.answer_id } },
  )
    .then(() => {
      Answer.findAll({
        where: {
          answer_id: data.answer_id,
        },
      })
        .then((answer) => {
          callback(null, answer[0]);
        })
        .catch((err) => {
          callback(err);
        });
    })
    .catch((err) => {
      callback(err);
    });
};

const updateNotHelpful = (data, id, callback) => {
  Answer.increment(
    'not_helpful',
    { by: 1, where: { answer_id: data.answer_id } },
  )
    .then(() => {
      Answer.findAll({
        where: {
          answer_id: data.answer_id,
        },
      })
        .then((answer) => {
          callback(null, answer[0]);
        })
        .catch((err) => {
          callback(err);
        });
    })
    .catch((err) => {
      callback(err);
    });
};

const deleteProduct = async (id, callback) => {
  await Product.destroy({
    where: { product_id: id },
  })
    .then((res) => {
      callback(null, res);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = {
  getAllDetails,
  getAllQuestions,
  getAllAnswers,
  addQuestion,
  addAnswer,
  updateHelpful,
  updateNotHelpful,
  deleteProduct,
};
