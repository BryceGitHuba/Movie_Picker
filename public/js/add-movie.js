// Use OMDb API to get runtime, release date, and poster image
const getMovieData = async () => {
    const title = document.querySelector('#title').value.trim();
    
    // Formats date as YYYY-MM-DD
    const formatDate = (date) => {
        return `${new Date(date).getFullYear()}-${new Date(date).getMonth() + 1}-${new Date(date).getDate()}`;
    }

    // // Format movie title as movie-title
    const formatTitle = (title) => { 
        return title.toLowerCase().replace(/\s/g, '-'); 
    }

    let movieUrl = formatTitle(title);

    // // const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${formattedTitle}&type=movie`;
    const apiUrl = `http://www.omdbapi.com/?apikey=f4438c34&t=${movieUrl}&type=movie`;

    const response = await fetch(apiUrl);
    
    const movieData = await response.json();

    // Alert user that movie was not found
    if(movieData.Response === "False"){
        alert(`${movieData.Error} Please try again.\nTip: check the movie title was entered correctly.`);
    }

    let { 
        Runtime: runtime, 
        Released: releaseDate, 
        Poster: poster, 
    } = movieData; 

    runtime = parseInt(runtime);

    releaseDate = formatDate(new Date(releaseDate));
    
    return { runtime, releaseDate, poster, title, movieUrl };
}

// Sends POST request to add new movie
const addMovie = async (event) => {
    event.preventDefault();  

    // Get the other movie data fields
    ({ title, runtime, releaseDate, poster, movieUrl } = await getMovieData());

    const genre = document.querySelector('#genre').value.trim();
    const plot = document.querySelector('#plot').value.trim();
    
    // Alert user they must fill out all three form sections
    if(!title || !genre || !plot){
        alert('The entire form must be completed to add a new movie.');
        return;
    }

    // Send POST request to add new movie
    if ({ title } && genre && plot) {
        const response = await fetch('/api/movie/add', {
        method: 'POST',
        body: JSON.stringify({ title, genre, plot, runtime, releaseDate, poster, movieUrl }),
        headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
        // If new movie was successfully created, load the movies informational page
        window.location.assign(`/api/movie/${movieUrl}`);
        } else if(response.status) {
        const resMessage = await response.json();
        alert(resMessage.message);
        }
    }
}

// addMovie() will execute when add movie form is submitted
document
    .querySelector('.add-movie-form')
    .addEventListener('submit', addMovie);