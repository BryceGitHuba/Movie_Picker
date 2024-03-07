const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', movieController.getMovieRecommendations);
router.post('/recommendations', movieController.getMovieRecommendations);

module.exports = router;