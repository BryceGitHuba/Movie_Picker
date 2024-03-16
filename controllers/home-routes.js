const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("moviePicker");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
