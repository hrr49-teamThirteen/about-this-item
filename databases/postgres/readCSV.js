const fs = require('fs');
const path = require('path');

const { readCSV } = require('./reader.js');
const { importDataToPostgres } = require('./importer.js')

// ---------- READ PRODUCTS CSV ---------- //

const productsCSVFile = path.join(__dirname, '/../csv/products.csv');
const productsStream = fs.createReadStream(productsCSVFile);
const productsQuery = 'INSERT INTO products (name) VALUES ($1);';
const productsData = readCSV(productsStream);
console.log('products data', productsData);
// importDataToPostgres(productsData, productsQuery, 'products');

// ---------- READ HIGHLIGHTS CSV ---------- //

const highlightsCSVFile = path.join(__dirname, '/../csv/highlights.csv');
const highlightsStream = fs.createReadStream(highlightsCSVFile);
const highlightsQuery = 'INSERT INTO highlights (text) VALUES ($1);';
const highlightsData = readCSV(highlightsStream);
console.log('highlights data', highlightsData);
// importDataToPostgres(highlightsData, highlightsQuery, 'highlights');

// ---------- READ SPECIFICATIONS CSV ---------- //

const specificationsCSVFile = path.join(__dirname, '/../csv/specifications.csv');
const specificationsStream = fs.createReadStream(specificationsCSVFile);
const specificationsQuery = 'INSERT INTO specifications (name, value, product_id) VALUES ($1, $2, $3);';
const specificationsData = readCSV(specificationsStream);
console.log('specifications data', specificationsData);
// importDataToPostgres(specificationsData, specificationsQuery, 'specifications');

// ---------- READ QUESTIONS CSV ---------- //

const questionsCSVFile = path.join(__dirname, '/../csv/questions.csv');
const questionsStream = fs.createReadStream(questionsCSVFile);
const questionsQuery = 'INSERT INTO questions (user_name, question, created_at, product_id) VALUES ($1, $2, $3, $4);';
const questionsData = readCSV(questionsStream);
console.log('questions data', questionsData);
// importDataToPostgres(questionsData, questionsQuery, 'questions');

// ---------- READ ANSWERS CSV ---------- //

const answersCSVFile = path.join(__dirname, '/../csv/answers.csv');
const answersStream = fs.createReadStream(answersCSVFile);
const answersQuery = 'INSERT INTO answers (user_name, answer, created_at, helpful, not_helpful, product_id, question_id) VALUES ($1, $2, $3, $4, $5, $6, $7);';
const answersData = readCSV(answersStream);
console.log('answers data', answersData);
// importDataToPostgres(answersData, answersQuery, 'answers');
