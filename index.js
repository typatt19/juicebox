const PORT = 3000;
const express = require('express');
const server = express();

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

server.use((req, res, next) => {
    const bodyParser = require('body-parser');
    server.use(bodyParser.json());
    console.log("<____Body Logger START____>");
    console.log(req.body);
    console.log("<_____Body Logger END_____>");
    next();
  });

  const apiRouter = require('./api');
server.use('/api', apiRouter);