require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('about_this_item', process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-6'
  }
});


// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully');
// } catch (error) {
//   console.error('Unable to connect to database:', error);
// }

// MODELS/TABLES

const Highlight = sequelize.define('Highlight', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

const Specification = sequelize.define('Specification', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false
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
  }
});

Question.hasMany(Answer, { foreignKey: 'question_id' });
Answer.belongsTo(Question, { foreignKey: 'question_id' });

async function syncAll() {
  await sequelize.sync();
};
// syncAll();

// QUERIES

const getAllDetails = (callback) => {
  var data = {};
  Highlight.findAll()
    .then(result => {
      data.highlights = [];
      result.forEach(item => {
        data.highlights.push(item.text);
      });
      Specification.findAll()
        .then(specs => {
          data.specifications = {};
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

const getAllQuestions = (callback) => {
  Question.findAll()
  .then(result => {
    result.forEach(item => {
      delete item.dataValues.createdAt;
      delete item.dataValues.updatedAt;
    })
    callback(null, result)
  })
  .catch(err => {
    callback(err);
  })
};

const getAllAnswers = (callback) => {
  Answer.findAll()
  .then(result => {
    result.forEach(item => {
      delete item.dataValues.createdAt;
      delete item.dataValues.updatedAt;
    })
    callback(null, result)
  })
  .catch(err => {
    callback(err);
  })
};


// EXPORTS
module.exports = {
  Highlight,
  Specification,
  Question,
  Answer,
  sequelize,
  syncAll,
  getAllDetails,
  getAllQuestions,
  getAllAnswers
};