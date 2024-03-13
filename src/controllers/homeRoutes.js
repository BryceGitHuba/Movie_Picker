const router = require("express").Router();
const { Movie } = require("../../models");

// Movie Picker
router.get("/", async (req, res) => {
    try {
      const movieData = await Movie.findAll(req.params.id);
      if (!movieData) {
        res.status(404).json(err);
        return;
      }
      res.status(200).json(movieData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
