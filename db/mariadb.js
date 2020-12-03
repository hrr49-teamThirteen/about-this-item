require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('ABOUT_THIS_ITEM', process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: true,
  },
  logging: false,
});

// MODELS/TABLES.

const Product = sequelize.define('Product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

const Highlight = sequelize.define('Highlight', {
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
});

const Specification = sequelize.define('Specification', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
});

const Question = sequelize.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
});

const Answer = sequelize.define('Answer', {
  answer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  question_id: {
    type: DataTypes.INTEGER,
  },
  answer: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  helpful: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  not_helpful: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  product_id: {
    type: DataTypes.INTEGER,
  },
});

// FOREIGN KEY ASSOCIATIONS
Question.hasMany(Answer, { foreignKey: 'question_id' });
Answer.belongsTo(Question, { foreignKey: 'question_id' });

Product.hasMany(Highlight, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Highlight.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(Specification, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Specification.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(Question, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Question.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(Answer, { foreignKey: 'product_id', onDelete: 'CASCADE' });
Answer.belongsTo(Product, { foreignKey: 'product_id' });

// MODEL / TABLE SYNC
async function syncAll(option) {
  await sequelize.sync(option);
}
syncAll();

// EXPORTS
module.exports = {
  Product,
  Highlight,
  Specification,
  Question,
  Answer,
  sequelize,
  syncAll,
};
