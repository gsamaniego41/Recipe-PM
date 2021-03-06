const db = require("../db/dbConfig");

module.exports = {
  // getDishes(): should return a list of all dishes in the database.
  getDishes() {
    return db("dishes");
  },

  // addDish(dish): should add the dish to the database and return the id of the new dish.
  getDish(id) {
    return db("dishes")
      .select("dishes.name", "recipes.name")
      .join("recipes", "dishes.id", "recipes.dish_id")
      .where("dishes.id", id);
  },

  // addDish(dish): should add the dish to the database and return the id of the new dish.
  addDish(dish) {
    return db("dishes").insert(dish);
  }
};
