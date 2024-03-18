// Send POST request to get movie info
const getMovieData = async () => {
        const title = document.querySelector('#title').value.trim();
        
        // Formats date as YYYY-MM-DD
        const formatDate = (date) => {
            return `${new Date(date).getFullYear()}-${new Date(date).getMonth() + 1}-${new Date(date).getDate()}`;
        }

        // Format movie title as movie-title
        const formatTitle = (title) => { 
            return title.toLowerCase().replace(/\s/g, '-'); 
        }

        const movieUrl = formatTitle(title);

        let movieData;

        if (title) {
            const response = await fetch('/api/movie/info', {
            method: 'POST',
            body: JSON.stringify({ movieUrl }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            // If response was ok, retreive the movie data
            movieData = await response.json();
            } else {
            const message = await response.json();
            return alert(message);
        }
        
        let { runtime, releaseDate, poster } = movieData; 
        
        runtime = parseInt(runtime);

        releaseDate = formatDate(new Date(releaseDate));
        
        return { runtime, releaseDate, poster, title, movieUrl };
    }
}

// Sends POST request to add new movie
const addMovie = async (event) => {
        event.preventDefault();  

        // Get the other movie data fields
        ({ title, runtime, releaseDate, poster, movieUrl } = await getMovieData());

        const genre = document.querySelector('#genre').value.trim();
        const plot = document.querySelector('#plot').value.trim();

        // Fallback... alert user they must fill out all three form sections
        if(!title || !genre || !plot){
            alert('The entire form must be completed to add a new movie.');
            return;
        }

        // Send POST request to add new movie
        if (title  && genre && plot) {
            const response = await fetch('/api/movie/add', {
            method: 'POST',
            body: JSON.stringify({ title, genre, plot, runtime, releaseDate, poster, movieUrl }),
            headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
            // If new movie was successfully created, load the movies informational page
            window.location.assign(`/api/movie/${movieUrl}`);
            } else {
            const message = await response.json();
            alert(message);
        }
    }
}

// addMovie() will execute when add movie form is submitted
document
    .querySelector('.add-movie-form')
    .addEventListener('submit', addMovie);