const express = require("express");

const db = require("./database/dbConfig.js");
const carsRouter = require('./cars/carsRouter.js');
const server = express();

server.use(express.json())

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex Daily Project</h3>');
});

module.exports = server;
