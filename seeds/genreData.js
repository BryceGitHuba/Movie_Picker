const { Genre } = require("../models");

const genreData = [
  {
    genre: "Comedy",
  },
  {
    genre: "Action",
  },
  {
    genre: "Musical",
  },
];

const seedGenres = () => Genre.bulkCreate(genreData);

module.exports = seedGenres;