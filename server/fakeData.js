const faker = require('faker');
const db = require('../db/mariadb.js');

console.log(process.env.DB_HOST);
// HIGHLIGHTS

// (async seedHighlights = function() {
//   var random = Math.floor(Math.random() * 4) + 4;
//   for (var i = 0; i < random; i++) {
//     var tagLine = faker.lorem.words();
//     var paragraph = faker.lorem.lines();
//     var highlight = `"${tagLine.toUpperCase()}: ${paragraph}"`;

//     await db.Highlight.create({
//       text: highlight
//     });
//   }
// })();


// SPECIFICATIONS

// (async function seedSpecifications() {
//   var random = Math.floor(Math.random() * 10) + 10;
//   for (var i = 0; i < random; i++) {
//     var specName = faker.commerce.productAdjective();
//     var specValue = faker.lorem.words();

//     await db.Specification.create({
//       name: `"${specName}"`,
//       value: `"${specValue}"`
//     });
//   }
//   await db.Specification.create({
//     name: "Description",
//     value: `"${faker.commerce.productDesription()}"`
//   })
// })();