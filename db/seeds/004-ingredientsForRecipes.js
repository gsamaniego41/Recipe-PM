exports.seed = function(knex) {
  return knex("table_name").insert([
    {recipe_id: 1, ingredient_id: 1},
    {recipe_id: 1, ingredient_id: 2},
    {recipe_id: 1, ingredient_id: 3},
    {recipe_id: 1, ingredient_id: 4},
    {recipe_id: 1, ingredient_id: 5},
    {recipe_id: 1, ingredient_id: 6},
    {recipe_id: 1, ingredient_id: 7}
  ]);
};
