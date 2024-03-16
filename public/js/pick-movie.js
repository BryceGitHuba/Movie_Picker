const moviePickerForm = document.querySelector('#movie-picker');

const moviePicker = async (event) => {
  event.preventDefault();

  let genre = document
                .querySelector('input[name=genre]:checked')
                .getAttribute('id');

  // Assign saves the homepage to history
  window.location.assign(`/api/movie/results/${genre}`);
};

// Event listeners
moviePickerForm.addEventListener('submit', moviePicker);