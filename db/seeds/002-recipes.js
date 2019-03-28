exports.seed = function(knex) {
  return knex("recipes").insert([
    {dish_id: 1, name: "Panang Curry"},
    {dish_id: 1, name: "Pad Thai"},
    {dish_id: 1, name: "Pad See Ewe"},
    {dish_id: 2, name: "Protein Oatmeal"},
    {dish_id: 2, name: "Chicken and Rice"},
    {dish_id: 2, name: "Salmon Quinoa Salad"},
    {dish_id: 3, name: "Sinigang"},
    {dish_id: 3, name: "Coconut Tinola"}
  ]);
};
