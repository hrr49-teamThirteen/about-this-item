/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
const faker = require('faker');
const db = require('../db/mariadb.js');

// RUNS SEEDING ON ALL TABLES
// CLEAR EXISTING DATABASE INFO
(async function resetAndSeedDatabase() {
  await db.syncAll()
    .then(async () => {
      await db.syncAll({ force: true })
        .catch((error) => {
          console.error('ERROR: ', error);
        });
      console.log('Database records cleared');
      console.log('Seeding... please wait...');

      // PRODUCTS
      await (async function seedProducts() {
        let productId = 1;
        const productQty = 100;
        let questionId = 1;
        let answerId = 1;
        for (let i = 0; i < productQty; i++) {
          const productName = faker.commerce.productName();
          await db.Product.create({
            product_id: productId,
            name: productName,
          })
            .then(() => {
              console.log(`Growing your database... ${i + 1} of ${productQty}`);
            })
            .catch((error) => {
              console.error('ERROR: ', error);
            });

          // HIGHLIGHTS
          await (async function seedHighlights() {
            const random = Math.floor(Math.random() * 5) + 4;
            for (let j = 0; j < random; j++) {
              const tagLine = faker.lorem.words();
              const paragraph = faker.lorem.lines();
              const highlight = `${tagLine.toUpperCase()}: ${paragraph}`;

              await db.Highlight.create({
                text: highlight,
                product_id: productId,
              })
                .catch((error) => {
                  console.error('ERROR: ', error);
                });
            }
          }());

          // SPECIFICATIONS
          await (async function seedSpecifications() {
            const random = Math.floor(Math.random() * 11) + 10;
            for (let j = 0; j < random; j++) {
              const specName = faker.commerce.productMaterial();
              const specValue = faker.lorem.words();

              await db.Specification.create({
                name: `${specName}`,
                value: `${specValue}`,
                product_id: productId,
              })
                .catch((error) => {
                  console.error('ERROR: ', error);
                });
            }
            // Certain specs are required for rendering
            await db.Specification.bulkCreate([
              {
                name: 'Description',
                value: `${faker.commerce.productDescription()}. ${faker.lorem.paragraphs()}`,
                product_id: productId,
              },
              {
                name: 'Height',
                value: `${(Math.random() * 30).toFixed(2)} inches`,
                product_id: productId,
              },
              {
                name: 'Width',
                value: `${(Math.random() * 30).toFixed(2)} inches`,
                product_id: productId,
              },
              {
                name: 'Length',
                value: `${(Math.random() * 30).toFixed(2)} inches`,
                product_id: productId,
              },
              {
                name: 'Weight',
                value: `${(Math.random() * 20).toFixed(2)} pounds`,
                product_id: productId,
              },
            ])
              .catch((error) => {
                console.error('ERROR: ', error);
              });
          }());

          // QUESTIONS & ANSWERS
          await (async function seedQAndA() {
            const randomQuestion = Math.floor(Math.random() * 50) + 50;

            for (let j = 1; j < randomQuestion; j++) {
              const userNameQ = faker.name.firstName();
              const question = faker.lorem.sentence();
              const creationPast = faker.date.past();

              await db.Question.create({
                question_id: `${questionId}`,
                user_name: `${userNameQ}`,
                question: `${question.substring(0, question.length - 1)}?`,
                created_at: `${creationPast}`,
                product_id: productId,
              })
                .catch((error) => {
                  console.error('ERROR: ', error);
                });

              // attach questions to this answer
              const randomAnswer = Math.floor(Math.random() * 5) + 1;
              for (let k = 0; k < randomAnswer; k++) {
                // eslint-disable-next-line no-redeclare
                const userNameA = faker.name.firstName();
                const answer = faker.lorem.sentences();
                const creationRecent = faker.date.past();
                const helpfulCount = Math.floor(Math.random() * 40);
                const notHelpfulCount = Math.floor(Math.random() * 40);

                await db.Answer.create({
                  question_id: `${questionId}`,
                  answer_id: `${answerId}`,
                  user_name: `${userNameA}`,
                  answer: `${answer}`,
                  created_at: `${creationRecent}`,
                  helpful: `${helpfulCount}`,
                  not_helpful: `${notHelpfulCount}`,
                  product_id: productId,
                })
                  .catch((error) => {
                    console.error('ERROR: ', error);
                  });
                answerId++;
              }
              questionId++;
            }
          }());
          productId++;
        }
      }());
      console.log('Database successfully seeded!');
      db.sequelize.close();
    });
}());
