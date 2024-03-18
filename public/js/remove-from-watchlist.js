// Sends POST request to remove movie from watchlist
const removeFromWatchlist = async (title) => {

    if (title) {
        const response = await fetch('/api/movie/remove-from-watchlist', {
        method: 'DELETE',
        body: JSON.stringify({ title }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        // If the movie was removed from watchlist, reload page
        location.reload();
        } else {
        const message = await response.json();
        alert(message);
        }
    }
}

// removeFromWatchlist() will execute when any of the remove buttons are clicked
document.querySelectorAll('.remove').forEach(btn => {
    btn.addEventListener('click', function() {
      const title = this.getAttribute('id');
      removeFromWatchlist(title);
    });
});