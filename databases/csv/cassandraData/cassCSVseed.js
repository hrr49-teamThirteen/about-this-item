/* eslint-disable no-loop-func */
const fs = require('fs');
const faker = require('faker');
const path = require('path');

const totalRecords = 10000000;

console.log('START CSV GENERATION');
console.time();

// ---------- PRODUCT DETAILS CSV GENERATOR ---------- //

const productDetailsCSVFile = path.join(__dirname, '/productDetails.csv');
const productDetailsStream = fs.createWriteStream(productDetailsCSVFile);

const seedProductsCSV = (start) => {
  let count = start;

  while (count <= totalRecords) {
    const productName = faker.commerce.productName();

    const numOfHighlights = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numOfHighlights; i++) {
      const tagLine = faker.lorem.words();
      const paragraph = faker.lorem.sentence();
      const highlightResult = `${tagLine.toUpperCase()}: ${paragraph}`;

      if (!productDetailsStream.write(`${count},${productName},${highlightResult}\n`)) {
        productDetailsStream.once('drain', () => {
          seedProductsCSV(count += 1);
        });
        return;
      }
    }
    count++;
  }
  productDetailsStream.end();
  console.log('product details CSV written!');
};
seedProductsCSV(1);

// ---------- SPECIFICATIONS CSV GENERATOR ---------- //

const specificationsCSVFile = path.join(__dirname, '/specificationsCass.csv');
const specificationsStream = fs.createWriteStream(specificationsCSVFile);

const seedSpecificationsCSV = (start) => {
  let count = start;

  while (count <= totalRecords) {
    const productId = Math.floor(Math.random() * 10) + 1;
    const numOfSpecs = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numOfSpecs; i++) {
      const specName = faker.commerce.productMaterial();
      const specValue = faker.lorem.words();
      const canWrite = specificationsStream.write(`${count},${specName},${specValue},${productId}\n`);
      if (!canWrite) {
        specificationsStream.once('drain', () => {
          seedSpecificationsCSV(count += 1);
        });
        return;
      }
    }
    count++;
  }
  specificationsStream.end();
  console.log('specifications CSV written!');
};
seedSpecificationsCSV(1);

// ---------- Q&A CSV GENERATOR ---------- //

const questionAnswersCSVFile = path.join(__dirname, '/QA.csv');
const QAStream = fs.createWriteStream(questionAnswersCSVFile);

const seedQACSV = (start) => {
  let count = start;

  while (count <= totalRecords) {
    const qUserName = faker.name.firstName();
    let question = faker.lorem.sentence();
    question = `${question.substring(0, question.length - 1)}?`;
    const qCreatedAt = faker.date.past();
    const productId = Math.floor(Math.random() * 10) + 1;

    const numOfAnswers = Math.floor(Math.random() * 3) + 1;
    for (let i = 0; i < numOfAnswers; i++) {
      const aUserName = faker.name.firstName();
      const answer = faker.lorem.sentence();
      const aCreatedAt = faker.date.past();
      const helpful = Math.floor(Math.random() * 25);
      const notHelpful = Math.floor(Math.random() * 25);

      const canWrite = QAStream.write(`${count},${qUserName},${question},${qCreatedAt},${aUserName},${answer},${aCreatedAt},${helpful},${notHelpful},${productId}\n`);
      if (!canWrite) {
        QAStream.once('drain', () => {
          seedQACSV(count += 1);
        });
        return;
      }
    }
    count++;
  }
  QAStream.end();
  console.log('Q&A CSV written!');
  console.log('FINISHED CSV GENERATION');
  console.timeEnd();
};
seedQACSV(1);
