const path = require('path');
const fs = require('fs');

const { writeCSV } = require('./writer.js');
const { createProduct, createHighlight, createSpecification, createQuestion, createAnswer } = require('./dataGenerator.js');

// CSV SEED STARTED
console.log('START CSV');
console.time();

// PRODUCTS DATA
const productsLines = 10000000;
const productsCSVFile = path.join(__dirname, '/products.csv');
const productsStream = fs.createWriteStream(productsCSVFile);
writeCSV(productsStream, productsLines, createProduct, 'utf-8', () => { productsStream.end(); });

// HIGHLIGHTS DATA
const highlightsLines = 1000;
const highlightsCSVFile = path.join(__dirname, '/highlights.csv');
const highlightsStream = fs.createWriteStream(highlightsCSVFile);
writeCSV(highlightsStream, highlightsLines, createHighlight, 'utf-8', () => { highlightsStream.end(); });

// SPECIFICATIONS DATA
const specificationsLines = 1000;
const specificationsCSVFile = path.join(__dirname, '/specifications.csv');
const specificationsStream = fs.createWriteStream(specificationsCSVFile);
writeCSV(specificationsStream, specificationsLines, createSpecification, 'utf-8', () => { specificationsStream.end(); });

// QUESTIONS DATA
const questionsLines = 1000;
const questionsCSVFile = path.join(__dirname, '/questions.csv');
const questionsStream = fs.createWriteStream(questionsCSVFile);
writeCSV(questionsStream, questionsLines, createQuestion, 'utf-8', () => { questionsStream.end(); });

// ANSWERS DATA
const answersLines = 1000;
const answersCSVFile = path.join(__dirname, '/answers.csv');
const answersStream = fs.createWriteStream(answersCSVFile);
writeCSV(answersStream, answersLines, createAnswer, 'utf-8', () => { answersStream.end(); });

// CSV SEED FINISHED
console.log('FINISH CSV');
console.timeEnd();
