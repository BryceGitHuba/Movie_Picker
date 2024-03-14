const router = require("express").Router();
const { Movie } = require("../../models");
const withAuth = require("../../utils/auth");


router.get('/:genre', async (req, res)=>{
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

// Add Movie
router.post("/", withAuth, async (req, res) => {
    try {
      const newMovie = await Movie.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json({ user: newMovie, message: `${newMovie} is added to the library!` });
    } catch (err) {
      res.status(400).json(err);
    }
  });




module.exports = router;
