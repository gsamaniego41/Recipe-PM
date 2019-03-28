const db = require("../db/dbConfig");

module.exports = {
  getDishes() {
    return db("dishes");
  },

  getDish(id) {
    return db("dishes")
      .select("dishes.name", "recipes.name")
      .join("recipes", "dishes.id", "recipes.dish_id")
      .where("dishes.id", id);
  }
};
