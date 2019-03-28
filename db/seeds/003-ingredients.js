exports.seed = function(knex) {
  return knex("table_name").insert([
    {name: "Shrimp"},
    {name: "Coconut cream"},
    {name: "Red Curry Paste"},
    {name: "Green bell peppers"},
    {name: "Kaffir lime leaves"},
    {name: "Fish sauce"},
    {name: "Sugar"}
  ]);
};
