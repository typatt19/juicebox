const {PORT = 3000} = process.env;
const express = require('express');
const server = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const apiRouter = require('./api');

server.use(morgan('dev'));
server.use(bodyParser.json());

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});

server.use('/api', apiRouter);