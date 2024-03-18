const seedGenres = require('../seeds/genreData');
const seedMovies = require('../seeds/movieData');
const seedUsers = require('../seeds/userData');
const seedWatchlist = require('../seeds/watchlistData');
const sequelize = require('../config/connection');

const seedData = async () => {
    await sequelize.sync({  force: true  });

    await seedGenres();
    console.log('Genres seeded');

    await seedMovies();
    console.log('Movies seeded');

    await seedUsers();
    console.log('Users seeded');

    await seedWatchlist();
    console.log('Watchlist seeded');

  process.exit(0);
};

seedData();