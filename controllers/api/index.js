const router = require("express").Router();

const movieRoutes = require("./movie-routes.js");
const userRoutes = require("./user-routes.js");

router.use("/movie", movieRoutes);
router.use("/users", userRoutes);

module.exports = router;