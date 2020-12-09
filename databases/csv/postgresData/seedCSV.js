const path = require('path');
const fs = require('fs');

const { writeCSV } = require('../writer.js');
const { createProduct, createHighlight, createSpecification, createQuestion, createAnswer } = require('./dataGenerator.js');

// CSV SEED STARTED
console.log('START CSV');
console.time();

// PRODUCTS DATA
const productsLines = 10000000;
const productsCSVFile = path.join(__dirname, '/products.csv');
const productsStream = fs.createWriteStream(productsCSVFile);
const productsString = createProduct();
writeCSV(productsStream, productsLines, productsString, 'utf-8', 'products', () => { productsStream.end(); });

// HIGHLIGHTS DATA
const highlightsLines = 10000000;
const highlightsCSVFile = path.join(__dirname, '/highlights.csv');
const highlightsStream = fs.createWriteStream(highlightsCSVFile);
const highlightsString = createHighlight();
writeCSV(highlightsStream, highlightsLines, highlightsString, 'utf-8', 'highlights', () => { highlightsStream.end(); });

// SPECIFICATIONS DATA
const specificationsLines = 10000000;
const specificationsCSVFile = path.join(__dirname, '/specifications.csv');
const specificationsStream = fs.createWriteStream(specificationsCSVFile);
const specificationsString = createSpecification();
writeCSV(specificationsStream, specificationsLines, specificationsString, 'utf-8', 'specifications', () => { specificationsStream.end(); });

// QUESTIONS DATA
const questionsLines = 10000000;
const questionsCSVFile = path.join(__dirname, '/questions.csv');
const questionsStream = fs.createWriteStream(questionsCSVFile);
const questionsString = createQuestion();
writeCSV(questionsStream, questionsLines, questionsString, 'utf-8', 'questions', () => { questionsStream.end(); });

// ANSWERS DATA
const answersLines = 10000000;
const answersCSVFile = path.join(__dirname, '/answers.csv');
const answersStream = fs.createWriteStream(answersCSVFile);
const answersString = createAnswer();
writeCSV(answersStream, answersLines, answersString, 'utf-8', 'answers', () => {
  answersStream.end();
  console.log('FINISH CSV');
  console.timeEnd();
});
