const { Movie } = require("../models");

const movieData = [
  {
    title: "The Other Woman",
    genre: "Comedy",
    description:
      "Three women plot against their ex-lover when they relaize they are all being cheated on.",
  },
  {
    title: "Mean Girls",
    genre: "Comedy",
    description:
      'The new girl in town, Cady Heron, shakes up her new high school by becoming "Plastic" in an undercover plot to bring down Regina Ggeorge.',
  },
];

const seedMovies = () => Movie.bulkCreate(movieData);

module.exports = seedMovies;
