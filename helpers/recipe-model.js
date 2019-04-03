const db = require("../db/dbConfig");

module.exports = {
  // getRecipes(): should return a list of all recipes in the database including the dish they belong to
  getRecipes() {
    return db("recipes")
      .select("recipes.id", "recipes.name", "dishes.name as dish")
      .join("dishes", "recipes.dish_id", "dishes.id");
  },

  addRecipe(recipe) {
    return db("recipes").insert(recipe);
  },

  deleteRecipe(id) {
    return db("recipes")
      .where("recipes.id", id)
      .delete();
  }
};
