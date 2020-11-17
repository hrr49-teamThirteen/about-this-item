
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
  request = supertest(server);
});

afterAll(() => {
  db.sequelize.close();
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
});