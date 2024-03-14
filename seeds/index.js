const seedMovies = require('./movieData');

const sequelize = require('../config/connection')


const seedData =  async ()=> {

    await sequelize.sync({force: true});

    await seedMovies();
    console.log('movies seeded');

    process.exit(0)
}

seedData()