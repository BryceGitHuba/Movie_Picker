// Sends POST request to add movie to watchlist
const watchlistMovie = async (event) => {
    event.preventDefault();  

    const title = document.querySelector('#watchlist').value;

    if (title) {
        const response = await fetch('/api/movie/watchlist', {
        method: 'POST',
        body: JSON.stringify({ title }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        // If movie was successfully added to watchlist, load the watchlist page
        window.location.assign(`/watchlist`);
        } else {
        const message = await response.json();
        alert(message);
        }
    }
}

// watchlistMovie() will execute when watchlist button is clicked
document.querySelector('#watchlist').addEventListener('click', watchlistMovie);