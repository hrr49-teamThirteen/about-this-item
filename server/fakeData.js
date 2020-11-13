const faker = require('faker');
const db = require('../db/mariadb.js');


// HIGHLIGHTS

(async function seedHighlights() {
  var random = Math.floor(Math.random() * 8) + 1;
  for (var i = 0; i < random; i++) {
    var tagLine = faker.lorem.words();
    var paragraph = faker.lorem.lines();
    var highlight = `"${tagLine.toUpperCase()}: ${paragraph}"`;

    await db.Highlight.create({
      text: highlight
    });
  }
})();


