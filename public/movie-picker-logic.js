const moviePicker = async (event) => {
  event.preventDefault();

  let genre = document.querySelector("input:checked").value;

  switch (genre) {
    case "Comedy":
      selection = comedy;
      break;
    case "Action":
      selection = action;
      break;
    case "Musical":
      selection = musical;
      break;
  };

  if (genre) {
  let response = await fetch(`/api/movie-picker/genre`, {
      method: "GET",
      body: JSON.stringify({ genre }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
  }
}
};

// Event listeners
const moviePickerForm = document.querySelector("#movie-picker");
if (moviePickerForm) {
  moviePickerForm.addEventListener("submit", moviePicker);
}
// Handlebar partials, Response let response = response.render if(), if I use re. render do I need to add in the middleware?
