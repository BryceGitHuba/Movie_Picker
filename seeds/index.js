const seedMovies = require("./movieData");
const seedGenres = require("./genreData");
const sequelize = require("../config/connection");

const seedData = async () => {
  await sequelize.sync({ force: true });
  await seedGenres();
  await seedMovies();
  console.log("movies seeded");
  console.log("genre seeded");

  process.exit(0);
};

seedData();
