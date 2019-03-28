const express = require("express");
const router = express.Router();

const db = require("../helpers/recipe-model");

router.get("/", (req, res) => {
  db.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  db.getDish(req.params.id)
    .then(dish => {
      if (dish.length > 0) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({msg: "Dish doesn't exist"});
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
