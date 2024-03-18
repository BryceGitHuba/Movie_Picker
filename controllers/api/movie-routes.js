const router = require('express').Router();
const { Movie, Genre, Watchlist } = require('../../models');
const withAuth = require('../../utils/auth');

// GET movie based on its title
router.get('/:title', async (req, res)=>{
  try {
        const movieData = await Movie.findOne({
          where: {
            url: req.params.title,
          },
          include: {
            model: Genre,
          }
        })
    
        const movie = movieData.get({plain: true});

        console.log(movie);
        
        res.render('movieInfo', {
          movie,
          genre: movie.genre.genre,
          loggedIn: req.session.loggedIn,
        });
        
      } catch (err) {
        res.status(500).json(err);
      }
})

// GET random movie based on its genre
router.get('/results/:genre', async (req, res) => {
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

        const movie = randomMovie.get({plain: true})

        res.render('movieInfo', {
          movie,
          genre: movie.genre.genre,
          loggedIn: req.session.loggedIn,
        })

      } catch (err) {
        res.status(500).json(err);
      }
});

// POST to add movie to database
router.post('/add', withAuth, async (req, res) => {
  try {
        // Capitalize first letter in movie genre
        const formatGenre = (genre) => { 
          return genre.charAt(0).toUpperCase() + genre.slice(1); 
        }

        const genre = formatGenre(req.body.genre);

        // Find the genre from the database, or create it if non-existent
        const genreData = await Genre.findOrCreate({
          where: {
              genre: genre,
          },
          raw: true,
        });

        const genreId = genreData[0].id;

        // Add new movie to database
        const newMovie = await Movie.create({
          title: req.body.title,
          genreId: genreId,
          plot: req.body.plot,
          releaseDate: req.body.releaseDate,
          runtime: req.body.runtime,
          poster: req.body.poster,
          url: req.body.movieUrl,
        });

        res.json({
          message: 'Successfully added new movie.',
          title: newMovie.title,
        });
        
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

// POST to watchlist movie
router.post('/watchlist', withAuth, async (req, res) => {
  try {
        // Get the movie ID
        const movieData = await Movie.findOne({
          where: { title: req.body.title }
        });

        const movieId = movieData.dataValues.id;

        // Add watchlisted movie to database
        const watchlistData = await Watchlist.create({
          movieId: movieId,
          userId: req.session.userId,
        });

        if(!watchlistData) {
          res
              .status(400)
              .json({ message: 'Could not find movie to add to watchlist.' });
          return;
      }

      console.log(watchlistData);

        res.json({
          message: 'Successfully watchlisted movie.',
        });
        
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

// DELETE to remove movie from watchlist
router.delete('/remove-from-watchlist', withAuth, async (req, res) => {
  try {
        // Get the movie ID
        const movieData = await Movie.findOne({
          where: { title: req.body.title }
        });

        const movieId = movieData.dataValues.id;

        // Delete movie from users watchlist
        const watchlistData = await Watchlist.destroy({
            where: {
              movieId: movieId,
              userId: req.session.userId,
            },
        });

        if(!watchlistData) {
            res
                .status(400)
                .json({ message: 'Could not find movie to remove from watchlist.' });
            return;
        }

        res.json({
          message: 'Successfully removed movie from watchlist.',
        });
        
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

module.exports = router;
