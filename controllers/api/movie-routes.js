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
