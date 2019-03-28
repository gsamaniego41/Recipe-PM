const express = require("express");
const router = express.Router();

const db = require("../helpers/recipe-model");

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
