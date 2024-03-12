const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");
const userRoutes = require("./user-routes");
const movieRoutes = require("./movie-routes");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/movie", movieRoutes);

module.exports = router;
