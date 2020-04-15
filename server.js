const express = require("express");

const db = require("./database/dbConfig.js");

const server = express();

server.use(express.js)

server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex Daily Project</h3>');
});

module.exports = server;
