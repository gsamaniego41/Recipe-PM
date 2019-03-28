exports.up = function(knex, Promise) {
  return knex.schema.createTable("ingredientsForRecipe", tbl => {
    tbl.increments();
    tbl
      .integer("recipe_id")
      .unsigned()
      .references("id")
      .inTable("recipes");
    tbl
      .integer("ingredient_id")
      .unsigned()
      .references("id")
      .inTable("ingredients");
    tbl.float("quantity", 2).notNullable();
    tbl.string("unit").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("ingredientsForRecipe");
};
