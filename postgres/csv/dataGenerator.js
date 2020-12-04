const faker = require('faker');

const createProduct = () => `${faker.commerce.productName()}\n`;

const createHighlight = () => {
  const tagLine = faker.lorem.words();
  const paragraph = faker.lorem.sentence();
  const highlight = `${tagLine.toUpperCase()}: ${paragraph}`;
  const productId = Math.floor(Math.random() * 1000);
  return `${highlight}, ${productId}\n`;
};

const createSpecification = () => {
  const specName = faker.commerce.productMaterial();
  const specValue = faker.lorem.words();
  const productId = Math.floor(Math.random() * 1000);
  return `${specName},${specValue},${productId}\n`;
};

const createQuestion = () => {
  const userName = faker.name.firstName();
  let question = faker.lorem.sentence();
  question = `${question.substring(0, question.length - 1)}?`;
  const createdAt = faker.date.past();
  const productId = Math.floor(Math.random() * 1000);
  return `${userName},${question},${createdAt},${productId}\n`;
};

const createAnswer = () => {
  const userName = faker.name.firstName();
  const answer = faker.lorem.sentence();
  const createdAt = faker.date.past();
  const helpful = Math.floor(Math.random() * 25);
  const notHelpful = Math.floor(Math.random() * 25);
  const productId = Math.floor(Math.random() * 1000);
  const questionId = Math.floor(Math.random() * 1000);
  return `${userName},${answer},${createdAt},${helpful},${notHelpful},${productId},${questionId}\n`;
};

module.exports = {
  createProduct,
  createHighlight,
  createSpecification,
  createQuestion,
  createAnswer,
};
