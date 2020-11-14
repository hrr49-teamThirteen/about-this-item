require('dotenv').config();
const app = require('./server.js');

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});