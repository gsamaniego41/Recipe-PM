exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    {name: "Thai Food"},
    {name: "Bodybuilding Meals"},
    {name: "Filipino Food"}
  ]);
};
