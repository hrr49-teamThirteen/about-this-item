require('dotenv').config();

const server = require('./server.js');

let port = process.env.PORT || 5000;

server.app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});