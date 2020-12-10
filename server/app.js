require('newrelic');
require('dotenv').config();

const server = require('./server.js');

const port = process.env.PORT || 5000;

server.app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
