const express = require("express");
const router = express.Router();

const db = require("../helpers/recipe-model");

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  const {id} = req.params;
  if (id < 1) {
    res.status(404).json({msg: `No recipe with the id of ${id}`});
  } else {
    db.getRecipeById(id)
      .first()
      .then(recipe => {
        res.status(200).json(recipe);
      })
      .catch(err => res.status(500));
  }
});

router.post("/", (req, res) => {
  const recipe = req.body;
  const {name, dish_id} = req.body;

  !name || !dish_id
    ? res
        .status(400)
        .json({error: "Please provide a recipe name and a dish id"})
    : db
        .addRecipe(recipe)
        .then(id => res.status(201).json(id[0]))
        .catch(err => res.status(500).json(err));
});

router.delete("/:id", (req, res) => {
  const {id} = req.params;
  if (id < 0) {
    res.status(404).json({msg: `No recipe with the id of ${id}`});
  } else {
    db.deleteRecipe(id)
      .then(id => {
        res.status(200).json(id);
      })
      .catch(err => res.status(500).json({msg: "Error deleting a recipe"}));
  }
});

module.exports = router;
