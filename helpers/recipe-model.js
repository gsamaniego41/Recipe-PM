const db = require("../db/dbConfig");

module.exports = {
  getDishes() {
    return db("dishes");
  }
};
