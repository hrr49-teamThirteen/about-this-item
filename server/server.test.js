
const db = require('../db/mariadb.js');
const http = require('http');
let app = require('./server.js');
app = app.app;
const supertest = require('supertest');

let server;
let request;

beforeAll(() => {
  server = http.createServer(app);
  server.listen();
  request = supertest(server);
});

afterAll(() => {
  server.close();

});

describe('Demo Test', () => {

  test('Gets test endpoint', async () => {
    const response = await request.get('/test');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("pass!");
  });
});