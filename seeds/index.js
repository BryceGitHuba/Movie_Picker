const seedMovies = require("./movieData");
const seedGenres = require("./genreData");
const sequelize = require("../config/connection");

const seedData = async () => {
  await sequelize.sync({  force: true  });

    await seedGenres();
    console.log('Genres seeded');
      await seedGenres();
  await seedMovies();
  console.log("Movies seeded");
  console.log("genre seeded");

  process.exit(0);
};

seedData();
