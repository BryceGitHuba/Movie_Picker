const axios = require('axios');
const apiKey = process.env.API_KEY;

exports.getMovieRecommendations = async (req, res) => {
  try {
    // Fetch movie recommendations based on user preferences (if provided)
    // For simplicity, let's assume the preferences are sent via POST request
    const { genre, year } = req.body;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&primary_release_year=${year}`;

    const response = await axios.get(apiUrl);
    const movies = response.data.results;

    // Render the movie recommendations view with the fetched movies
    res.render('movieRecommendations', { movies });
  } catch (error) {
    console.error(error);
    res.render('error');
  }
};