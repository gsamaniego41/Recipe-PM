const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const PORT = process.env.PORT || 4000;
const db = require("./db/dbConfig");
const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json(`Welcome to my recipe book`);
});

server.listen(PORT, () => console.log(`\n Server is live on Port ${PORT}\n`));
