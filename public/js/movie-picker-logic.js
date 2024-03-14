const moviePickerForm = document.querySelector("#movie-picker");

const moviePicker = async (event) => {
  event.preventDefault();

  let selection;

  let comedyGenre = document.querySelector("#comedy").checked;
  let actionGenre = document.querySelector("#action").checked;

  console.log(comedyGenre);

  if (comedyGenre=== true){
    selection =  'comedy'
  } else if (actionGenre === true){
    selection = 'action'
  }

//   switch (genre) {
//     case "Comedy":
//       selection = comedy;
//       break;
//     case "Action":
//       selection = action;
//       break;
//     case "Musical":
//       selection = musical;
//       break;
//       default:
//         break;
//   };


window.location.replace(`/results/${selection}`)

};

// Event listeners

  moviePickerForm.addEventListener("submit", moviePicker);

// Handlebar partials, Response let response = response.render if(), if I use re. render do I need to add in the middleware?
