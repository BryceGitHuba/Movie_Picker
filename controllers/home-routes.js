const router = require('express').Router();
const { Genre, Movie, User, Watchlist } = require('../models');
const withAuth = require('../utils/auth');

// Homepage dynamically renders genres
router.get('/', async (req, res) => {
  try {
        const genreData = await Genre.findAll();

        const genre = genreData.map((genre =>
                        genre.get({ plain: true })
                      ));

        res.render('homepage', { 
          genre, 
          loggedIn: req.session.loggedIn, 
        });

  } catch(err) {
    res.status(500).json(err);
  }
});

// GET login page
router.get('/login', (req, res) => {
  // If user is logged in, they will be redirected to homepage
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }

  res.render('login');
});

// GET signup page
router.get('/signup', (req, res) => {
  // If user is logged in, they will be redirected to homepage
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }

  res.render('signup');
});

// GET users watchlist page
router.get('/watchlist', withAuth, async (req, res) => {
  try {
        const userData = await User.findOne({
          where: {
              username: req.session.user,
          },
        });

        const userId = userData.dataValues.id;

        const watchlistData = await User.findByPk(userId, {
          attributes: { exclude: ['password'] },
          include: { model: Movie },
        });

        const watchlist = watchlistData.get({ plain: true });
        
        res.render('watchlist', {
        watchlist: watchlist.movies,
        loggedIn: req.session.loggedIn,
        user: req.session.user,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;