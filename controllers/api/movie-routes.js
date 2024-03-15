const router = require("express").Router();
const { Movie, Genre } = require("../../models");
const withAuth = require("../../utils/auth");


router.get("/results/:id", async (req, res) => {
  try {
    const movieData = await Genre.findOne({
      where: {
        id: req.params.id,
        include: {
          model: Movie
        },
      },
    });

    if (!movieData){
      alert('movie genre not available')
    }

    const randomMovie = movieData[Math.floor(Math.random() * movieData.length)]   


    const movieItem =  randomMovie.get({plain: true})


    console.log(movieItem);

    res.render('movieRecommendations', {
      movieItem,
      loggedIn: req.session.loggedIn
    })

  } catch (error) {
    res.status(500).json(error)
  }
});

// Add Movie
router.post("/", withAuth, async (req, res) => {
    try {
      const newMovie = await Movie.create({
        ...req.body,
        userId: req.session.userId,
      });
      res.status(200).json({ user: newMovie, message: `${newMovie} is added to the library!` });
    } catch (err) {
      res.status(400).json(err);
    }
  });




module.exports = router;
