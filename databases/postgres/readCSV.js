const fs = require('fs');
const path = require('path');

const { readCSV } = require('./reader.js');

// ---------- READ PRODUCTS CSV ---------- //

const productsCSVFile = path.join(__dirname, '/../csv/products.csv');
const productsStream = fs.createReadStream(productsCSVFile);
const productsData = readCSV(productsStream);

// ---------- READ HIGHLIGHTS CSV ---------- //

const highlightsCSVFile = path.join(__dirname, '/../csv/highlights.csv');
const highlightsStream = fs.createReadStream(highlightsCSVFile);
const highlightsData = readCSV(highlightsStream);

// ---------- READ SPECIFICATIONS CSV ---------- //

const specificationsCSVFile = path.join(__dirname, '/../csv/specifications.csv');
const specificationsStream = fs.createReadStream(specificationsCSVFile);
const specificationsData = readCSV(specificationsStream);

// ---------- READ QUESTIONS CSV ---------- //

const questionsCSVFile = path.join(__dirname, '/../csv/questions.csv');
const questionsStream = fs.createReadStream(questionsCSVFile);
const questionsData = readCSV(questionsStream);

// ---------- READ ANSWERS CSV ---------- //

const answersCSVFile = path.join(__dirname, '/../csv/answers.csv');
const answersStream = fs.createReadStream(answersCSVFile);
const answersData = readCSV(answersStream);
