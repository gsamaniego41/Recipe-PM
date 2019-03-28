const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const server = express();
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`\n Server is live on Port ${PORT}\n`));
