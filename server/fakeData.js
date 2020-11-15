const faker = require('faker');
const db = require('../db/mariadb.js');

// RUNS SEEDING ON ALL TABLES

// CLEAR EXISTING DATABASE INFO
(async function resetAndSeedDatabase() {
  await db.sequelize.sync({ force: true })
  .catch((error) => {
    console.log('ERROR: ', error);
  })

  // HIGHLIGHTS
  await (async function seedHighlights() {
    var random = Math.floor(Math.random() * 5) + 4;
    for (var i = 0; i < random; i++) {
      var tagLine = faker.lorem.words();
      var paragraph = faker.lorem.lines();
      var highlight = `${tagLine.toUpperCase()}: ${paragraph}`;

      await db.Highlight.create({
        text: highlight
      })
      .catch((error) => {
        console.error('ERROR: ', error);
      });
    }
  })();

  // SPECIFICATIONS
  await (async function seedSpecifications() {
    var random = Math.floor(Math.random() * 11) + 10;
    for (var i = 0; i < random; i++) {
      var specName = faker.commerce.productMaterial();
      var specValue = faker.lorem.words();

      await db.Specification.create({
        name: `${specName}`,
        value: `${specValue}`
      })
      .catch((error) => {
        console.error('ERROR: ', error);
      });
    }
    // A description spec is required for rendering
    await db.Specification.create({
      name: "Description",
      value: `${faker.commerce.productDescription()}`
    })
    .catch((error) => {
      console.error('ERROR: ', error);
    });
  })();

  // QUESTIONS & ANSWERS
  await (async function seedQAndA() {
    var randomQuestion = Math.floor(Math.random() * 50) + 50;
    var answerId = 1;
    for (var i = 1; i < randomQuestion; i++) {
      var userName = faker.name.firstName();
      var question = faker.lorem.sentence();
      var creationPast = faker.date.past();

      await db.Question.create({
        question_id: `${i}`,
        user_name: `${userName}`,
        question: `${question.substring(0, question.length - 1)}?`,
        created_at: `${creationPast}`
      })
      .catch((error) => {
        console.error('ERROR: ', error);
      });

      // attach questions to this answer
      var randomAnswer = Math.floor(Math.random() * 11) + 1;
      for (var j = 0; j < randomAnswer; j++) {
        var userName = faker.name.firstName();
        var answer = faker.lorem.sentence();
        var creationRecent = faker.date.recent();
        var helpfulCount = Math.floor(Math.random() * 40);
        var notHelpfulCount = Math.floor(Math.random() * 40);

        await db.Answer.create({
          question_id: `${i}`,
          answer_id: `${answerId}`,
          user_name: `${userName}`,
          answer: `${answer}`,
          created_at: `${creationRecent}`,
          helpful: `${helpfulCount}`,
          not_helpful: `${notHelpfulCount}`
        })
        .catch((error) => {
          console.log('ERROR: ', error);
        });
        answerId++;
      }
    }
  })();
})();



