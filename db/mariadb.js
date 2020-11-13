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
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  question: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
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
    type: DataTypes.STRING,
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

sequelize.sync();

// QUERIES



// EXPORTS
module.exports = {
  Highlight
};