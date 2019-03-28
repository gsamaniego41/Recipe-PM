exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    {name: "Thai Food"}, // 1
    {name: "Bodybuilding Meals"}, // 2
    {name: "Filipino Food"} // 3
  ]);
};
