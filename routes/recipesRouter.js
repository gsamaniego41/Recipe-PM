const express = require("express");
const router = express.Router();

const db = require("../helpers/recipe-model");

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  const recipe = req.body;
  db.addRecipe(recipe)
    .then(id => res.status(201).json(id[0]))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
