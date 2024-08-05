const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes.js");
router.use("/api/users", userRoutes);

const dogRoutes = require("./dogRoutes.js");
router.use("/api/dogs", dogRoutes);

module.exports = router;
