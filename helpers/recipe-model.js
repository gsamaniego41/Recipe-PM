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
  },

  // getRecipes(): should return a list of all recipes in the database including the dish they belong to
  getRecipes() {
    return db("recipes")
      .select("recipes.id", "recipes.name", "dishes.name as dish")
      .join("dishes", "recipes.dish_id", "dishes.id");
  },

  addRecipe(recipe) {
    return db("recipes").insert(recipe);
  }
};
