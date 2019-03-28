exports.seed = function(knex) {
  return knex("table_name").insert([
    {name: "Shrimp"}, // 1
    {name: "Coconut cream"}, // 2
    {name: "Red Curry Paste"}, // 3
    {name: "Green bell peppers"}, // 4
    {name: "Kaffir lime leaves"}, // 5
    {name: "Fish sauce"}, // 6
    {name: "Sugar"} // 7
  ]);
};
