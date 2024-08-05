const express = require("express");
const router = express.Router();
const { User, Dog } = require("../models");

//read all
router.get("/", (req, res) => {
  User.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

//create
router.post("/", (req, res) => {
  User.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

//read one
router.get("/:id", (req, res) => {
  User.findByPk(req.params.id, {
    include: [Dog],
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: "no such User" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

module.exports = router;
