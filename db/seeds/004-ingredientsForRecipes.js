exports.seed = function(knex) {
  return knex("ingredientsForRecipe").insert([
    {recipe_id: 1, ingredient_id: 1, quantity: 3, unit: "lbs"},
    {recipe_id: 1, ingredient_id: 2, quantity: 20, unit: "fl oz"},
    {recipe_id: 1, ingredient_id: 3, quantity: 3, unit: "tbspn"},
    {recipe_id: 1, ingredient_id: 4, quantity: 1 / 2, unit: "piece/s"},
    {recipe_id: 1, ingredient_id: 5, quantity: 5, unit: "piece/s"},
    {recipe_id: 1, ingredient_id: 6, quantity: 1, unit: "tsp"},
    {recipe_id: 1, ingredient_id: 7, quantity: 1, unit: "tbspn"}
  ]);
};
