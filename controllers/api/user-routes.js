const router = require('express').Router();
const { User } = require('../../models');

// POST to signup or create new user
router.post('/signup', async (req, res) => {
  try {
        const dbUser = await User.findOne({
          where: {
              username: req.body.username,
          },
          });

          // Validation for existing username
          if (dbUser) {
          res
              .status(400)
              .json({ message: 'Username already exists. Please try again!' });
          return;
          }

          // Validation for password length
          if (req.body.password.length < 8) {
          res
              .status(400)
              .json({ message: 'Password must be at least 8 characters. Please try again!', });
          return;
          }

          // Create new user
          const newUser = await User.create({
          username: req.body.username,
          password: req.body.password,
          });

          res
          .status(200)
          .json({ user: newUser.username, message: 'You are now signed up!' });

      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
});

// POST to login user
router.post('/login', async (req, res) => {
  try {
        const userData = await User.findOne({
          where: { username: req.body.username },
        });

        if (!userData) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again.' });
          return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect username or password, please try again.' });
          return;
        }

        // Save session parameters
        req.session.save(() => {
        // Saves the currently logged in user by their username
        req.session.user = req.body.username;
        // and their ID
        req.session.userId = userData.id,
        req.session.loggedIn = true;
        // Set users logged in session to expire in 15 minutes
        req.session.cookie.maxAge = 900000;
        
        res
          .status(200)
          .json({ user: userData.username, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// POST to logout user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });

  } else {
    res.status(404).end();
  }
});

module.exports = router;
