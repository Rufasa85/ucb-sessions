const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});
router.get("/secret", (req, res) => {
  res.render("secret", {
    isLoggedIn: req.session.user ? true : false,
  });
});
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
