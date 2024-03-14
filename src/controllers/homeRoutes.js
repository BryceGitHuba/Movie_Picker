const router = require("express").Router();
const { Movie } = require("../../models");

// Movie Picker
router.get("/api/movie-picker/genre", async (req, res) => {
    try {
      const movieData = await Movie.findAll(req.params.id);
      if (!movieData) {
        res.status(404).json(err);
        return; 
      }
      res.render("/", movieData);
      res.status(200).json(movieData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again" });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});


module.exports = router;
