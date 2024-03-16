const router = require("express").Router();
const { Movie, Genre } = require("../../models");
const withAuth = require("../../utils/auth");

// GET movie based on its id
router.get('/:id', async (req, res)=>{
  try {
          const movieData = await Movie.findAll({
            where: {
              genre: req.params.genre
            }
          });

          if (!movieData){
            res.json({message: 'movie genre not available'})
          }

          res.json(movieData)
      
          
        } catch (err) {
          res.status(500).json(err);
        }
})

// GET random movie based on its genre
router.get("/results/:genre", async (req, res) => {
  try {
    const movieData = await Movie.findAll({
      include: {
        model: Genre,
        where: {
          genre: req.params.genre,
        }
      }
    })

    if (!movieData) {
      alert(`Sorry, the ${req.params.genre} genre does not exist. Please try again.`);
    }

    const randomMovie = movieData[Math.floor(Math.random() * movieData.length)]   

    const movie =  randomMovie.get({plain: true})

    res.render('movieRecommendations', {
      movie,
      genre: req.params.genre.charAt(0).toUpperCase() + req.params.genre.slice(1),
      loggedIn: req.session.loggedIn
    })

  } catch (err) {
    res.status(500).json(err);
  }
});

// POST to add movie to database
router.post('/', async (req, res) => {
  try {
    // Get the genre id from the database
    const dbGenre = await Genre.findOne({
      where: {
          genre: req.body.genre,
      },
    });

    return console.log(dbGenre);

    const genreID = dbGenre.dataValues.id;

    const newMovie = await Movie.create({
      title: req.body.title,
      genreId: genreID,
      plot: req.body.plot,
      releaseDate: req.body.releaseDate,
      runTime: req.body.runTime,
      poster: req.body.poster,
    });

    res.json({
      message: 'Successfully added new movie.',
      title: newMovie.title,
    });

    res.render('//:id', {

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

module.exports = router;
