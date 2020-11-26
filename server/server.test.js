
require('babel-polyfill');
const db = require('../db/mariadb.js');
const http = require('http');
let app = require('./server.js');
app = app.app;
const supertest = require('supertest');

let server;
let request;

beforeAll(async () => {
  server = http.createServer(app);
  await server.listen();
  await db.syncAll();
  request = supertest(server);
});

afterEach(async () => {
  await db.Question.destroy({ where: { user_name: 'TestRoger'}
  });
  await db.Answer.destroy({ where: { user_name: 'TestRoger'}
  });
});

afterAll(async () => {
  await db.sequelize.close();
  server.close();
});

describe('API Routes', () => {
  it('Gets message from response body', async () => {
    const response = await request.get(`/test`);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
  });

  var id = 1;

  it('Gets details from specified product', async () => {
    const response = await request.get(`/api/products/${id}/details`);

    expect(response.status).toBe(200);
    expect(response.body.specifications['Item Number']).toBe("1");
  });

  it('Gets all questions from specified product', async () => {
    const response = await request.get(`/api/products/${id}/questions`);

    expect(response.status).toBe(200);
    expect(response.body.length).not.toBe(0);
  });

  it('Gets all answers from specified product', async () => {
    const response = await request.get(`/api/products/${id}/answers`);

    expect(response.status).toBe(200);
    expect(response.body.length).not.toBe(0);
  });

  it('Posts question about specified product', async () => {
    const response = await request.post(`/api/products/${id}/questions`).send({
      user_name: 'TestRoger',
      question: 'How do I move the whatsit up to get the other thing working?',
      product_id: 1
    });

    expect(response.status).toBe(201);
    expect(response.body['question']).toBe('How do I move the whatsit up to get the other thing working?');
  });

  it('Posts answer about specified question', async () => {
    const response = await request.post(`/api/products/${id}/answers`).send({
      question_id: 1,
      user_name: 'TestRoger',
      answer: 'How do I move the whatsit up to get the other thing working?',
      product_id: 1
    });

    expect(response.status).toBe(201);
    expect(response.body['answer']).toBe('How do I move the whatsit up to get the other thing working?');
  });

  it('Increments helpful by one', async () => {
    let helpfulCount;
    await db.Answer.findAll({ where: {
      answer_id: id
    }}).then((result)=> {
      helpfulCount = result[0].dataValues['helpful'];
    })
    const response = await request.put(`/api/products/${id}/helpful`).send({
      answer_id: id
    });

    expect(response.status).toBe(200);
    expect(response.body['helpful']).toBe(helpfulCount + 1);
    await db.Answer.decrement('helpful', { by: 1, where: { answer_id: id }});
  });

  it('Increments not_helpful by one', async () => {
    let notHelpfulCount;
    await db.Answer.findAll({ where: {
      answer_id: id
    }}).then((result)=> {
      notHelpfulCount = result[0].dataValues['not_helpful'];
    })
    const response = await request.put(`/api/products/${id}/not-helpful`).send({
      answer_id: id
    });

    expect(response.status).toBe(200);
    expect(response.body['not_helpful']).toBe(notHelpfulCount + 1);
    await db.Answer.decrement('not_helpful', { by: 1, where: { answer_id: id }});
  });
});