const moviePicker = async (event) => {
  event.preventDefault();

  const genreComedy = document.querySelector('#comedy').value;
  const genreAction = document.querySelector('#action').value;
  const genreMusical = document.querySelector('#musical').value;

  if (genreComedy) {
    const response = await fetch(`/api/movie-picker/genre: "Comedy"`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  else if (genreAction) {
    const response = await fetch(`/api/movie-picker/genre: "Action"`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  else if (genreMusical) {
    const response = await fetch(`/api/movie-picker/genre: "Musical"`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  else if (genreMusical) {
    const response = await fetch(`/api/movie-picker/genre: "Musical"`, {
      method: 'POST',
      body: JSON.stringify({ title }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
   else if (response.ok) {
      window.location.toString();
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      alert('Failed to pick movie.');
    }
  };

  // Event listeners
const moviePickerForm = document.querySelector('#movie-picker');
if (moviePickerForm) {
  moviePickerForm.addEventListener('submit', moviePicker);
}
