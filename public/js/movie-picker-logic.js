const moviePickerForm = document.querySelector("#movie-picker");

const moviePicker = async (event) => {
  event.preventDefault();

  // let selection;

  let genre = document.querySelector('input[name=genre]:checked').getAttribute('id');
  // let actionGenre = document.querySelector("#action").checked;
  // let musicalGenre = document.querySelector("#musical").checked;

  console.log(genre);

  // if (comedyGenre=== true){
  //   selection =  '1'
  // } else if (actionGenre === true){
  //   selection = '2'
  // }
  // else if (musicalGenre === true){
  //   selection = '3'
  // }

window.location.replace(`/results/${genre}`);
};

// Event listeners

  moviePickerForm.addEventListener("submit", moviePicker);