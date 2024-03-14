const router = require("express").Router();
const { Movie } = require("../models");

router.get("/", (req, res) => {
  res.render("moviePicker");
});


router.get("/results/:genre", async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      where: {
        genre: req.params.genre
      }
    });

    if (!movieData){
      alert('movie genre not available')
    }

    const randomMovie = movieData[Math.floor(Math.random() * movieData.length)]   


    const movieItem =  randomMovie.get({plain: true})


    console.log(movieItem);

    res.render('movieRecommendations', {
      movieItem,
      logged_in: req.session.logged_in
    })

  } catch (error) {
    res.status(500).json(error)
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
