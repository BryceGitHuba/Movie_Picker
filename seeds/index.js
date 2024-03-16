const seedGenres = require('./genreData');
const seedMovies = require('./movieData');
const sequelize = require('../config/connection')


const seedData =  async ()=> {

    await sequelize.sync({ force: true });

    await seedGenres();
    console.log('Genres seeded');
    
    await seedMovies();
    console.log('Movies seeded');

    process.exit(0)
}

seedData()