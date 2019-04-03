const express = require("express");
const router = express.Router();

const db = require("../helpers/dishes-model");

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

router.post("/", (req, res) => {
  const {name} = req.body;
  !name
    ? res.status(400).json({error: "Please provide a name for your dish"})
    : db
        .addDish(req.body)
        .then(id => {
          res.status(201).json(id);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;
