// Use OMDb API to get runtime, release date, and poster image
const getMovieData = async () => {
    const title = document.querySelector('#title').value.trim();
    
    // Reformat movie title
    const formattedTitle = title.toLowerCase().replace(/\s/g, '-'); 

    const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${formattedTitle}&type=movie`;

    const response = await fetch(apiUrl);
    const movieData = await response.json();

    // Formats date as YYYY-MM-DD
    const formatDate = (date) => {
        return `${new Date(date).getFullYear()}-${new Date(date).getMonth()+1}-${new Date(date).getDate()}`;
    }

    let { 
        Runtime: runTime, 
        Released: releaseDate, 
        Poster: poster, 
    } = movieData; 

    // Parse integers from string
    runTime = parseInt(runTime);

    releaseDate = formatDate(new Date(releaseDate));

    return { runTime, releaseDate, poster };
}

// Sends POST request to add new movie
const addMovieFormHandler = async (event) => {

}

// addMovieFormHandler() will execute when add movie form is submitted
document
    .querySelector('.add-movie-form')
    .addEventListener('submit', addMovieFormHandler);