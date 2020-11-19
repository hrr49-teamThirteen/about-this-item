require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('about_this_item', process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-6'
  },
  logging: false
});


// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully');
// } catch (error) {
//   console.error('Unable to connect to database:', error);
// }

// MODELS/TABLES

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  }
});

const Highlight = sequelize.define('Highlight', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
  }
});

const Specification = sequelize.define('Specification', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
  }
});

const Question = sequelize.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  product_id: {
    type: DataTypes.INTEGER,
  }
});

const Answer = sequelize.define('Answer', {
  answer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  question_id: {
    type: DataTypes.INTEGER
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  helpful: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  not_helpful: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false
  },
  product_id: {
    type: DataTypes.INTEGER,
  }
});

// FOREIGN KEY ASSOCIATIONS
Question.hasMany(Answer, { foreignKey: 'question_id' });
Answer.belongsTo(Question, { foreignKey: 'question_id' });

Product.hasMany(Highlight, { foreignKey: 'product_id' });
Highlight.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(Specification, { foreignKey: 'product_id' });
Specification.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(Question, { foreignKey: 'product_id' });
Question.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(Answer, { foreignKey: 'product_id' });
Answer.belongsTo(Product, { foreignKey: 'product_id' });


// MODEL / TABLE SYNC
async function syncAll(option) {
  await sequelize.sync(option);
};
// syncAll( {alter: true });

// QUERIES

const getAllDetails = (id, callback) => {
  var data = {};
  Highlight.findAll({
    where: {
      product_id: id
    }
  })
    .then(result => {
      data.highlights = [];
      result.forEach(item => {
        data.highlights.push(item.text);
      });
      Specification.findAll({
        where: {
          product_id: id
        }
      })
        .then(specs => {
          data.specifications = {};
          data.specifications["Item Number"] = id;
          specs.forEach(item => {
            if (item.name.toLowerCase() === 'description') {
              data.description = item.value;
            } else {
              data.specifications[item.name] = item.value;
            }
          });
          callback(null, data);
        })
        .catch(err => {
          callback(err);
        });
    })
    .catch(err => {
      callback(err);
    });
};

const getAllQuestions = (id, callback) => {
  Question.findAll({
    where: {
      product_id: id
    }
  })
  .then(result => {
    result.forEach(item => {
      delete item.dataValues.createdAt;
      delete item.dataValues.updatedAt;
    })
    callback(null, result)
  })
  .catch(err => {
    callback(err);
  });
};

const getAllAnswers = (id, callback) => {
  Answer.findAll({
    where: {
      product_id: id
    }
  })
  .then(result => {
    result.forEach(item => {
      delete item.dataValues.createdAt;
      delete item.dataValues.updatedAt;
    })
    callback(null, result)
  })
  .catch(err => {
    callback(err);
  });
};

const addQuestion = (data, id, callback) => {
  Question.create({
    user_name: data.user_name,
    question: data.question,
    product_id: id
  })
  .then(result => {
    callback(null, result);
  })
  .catch(err => {
    callback(err);
  });
};

const addAnswer = (data, id, callback) => {
  Answer.create({
    user_name: data.user_name,
    question_id: data.question_id,
    answer: data.answer,
    product_id: id
  })
  .then(result => {
    callback(null, result);
  })
  .catch(err => {
    callback(err);
  });
};

const updateHelpful = (data, id, callback) => {
  Answer.increment(
    'helpful',
    { by: 1, where: { answer_id: data.answer_id }
  })
  .then(result => {
    Answer.findAll({
      where: {
        answer_id: data.answer_id
      }
    })
    .then(answer => {
      delete answer[0].dataValues.createdAt;
      delete answer[0].dataValues.updatedAt;
      callback(null, answer[0]);
    })
    .catch(err => {
      callback(err);
    });
  })
  .catch(err => {
    callback(err);
  });
};

const updateNotHelpful = (data, id, callback) => {
  Answer.increment(
    'not_helpful',
    { by: 1, where: { answer_id: data.answer_id }
  })
  .then(result => {
    Answer.findAll({
      where: {
        answer_id: data.answer_id
      }
    })
    .then(answer => {
      delete answer[0].dataValues.createdAt;
      delete answer[0].dataValues.updatedAt;
      callback(null, answer[0]);
    })
    .catch(err => {
      callback(err);
    });
  })
  .catch(err => {
    callback(err);
  });
};

// EXPORTS
module.exports = {
  Product,
  Highlight,
  Specification,
  Question,
  Answer,
  sequelize,
  syncAll,
  getAllDetails,
  getAllQuestions,
  getAllAnswers,
  addQuestion,
  addAnswer,
  updateHelpful,
  updateNotHelpful
};