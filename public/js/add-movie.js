// Use OMDb API to get runtime, release date, and poster image
const getMovieData = async () => {
    // const title = `Killers of the Flower Moon`;
    const title = document.querySelector('#title').value.trim();
    
    // Reformat movie title
    const formattedTitle = title.toLowerCase().replace(/\s/g, '-'); 

    // const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${formattedTitle}&type=movie`;
    const apiUrl = `http://www.omdbapi.com/?apikey=f4438c34&t=${formattedTitle}&type=movie`;

    const response = await fetch(apiUrl);
    
    const movieData = await response.json();

    if(movieData.Response === "False"){
        alert(`${movieData.Error} Please try again.\nTip: check the movie title was entered correctly.`);
    }

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
    event.preventDefault();  

    const title = document.querySelector('#title').value.trim();
    const genre = document.querySelector('#genre').value.trim();
    const plot = document.querySelector('#plot').value.trim();
    
    // Alert user they must fill out all three form sections
    if(!title || !genre || !plot){
        alert('The entire form must be completed to add a new movie.');
        return;
    }

    // Get the other movie data fields
    ({ runTime, releaseDate, poster } = await getMovieData());

    console.log({ title, genre, plot, runTime, releaseDate, poster });

    // Send POST request to add new movie
    if (title && genre && plot) {
        const response = await fetch('/api/movie', {
        method: 'POST',
        body: JSON.stringify({ title, genre, plot, runTime, releaseDate, poster }),
        headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
        // If new movie was successfully created, load the movies page
        document.location.replace('/movie');
        } else if(response.status) {
        const resMessage = await response.json();
        alert(resMessage.message);
        }
    }
}

// addMovieFormHandler();

// addMovieFormHandler() will execute when add movie form is submitted
document
    .querySelector('.add-movie-form')
    .addEventListener('submit', addMovieFormHandler);