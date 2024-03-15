const Genre = require('./Genre');
const Movie = require('./Movie');
const User = require('./User');

Movie.belongsTo(Genre,{
    foreignKey: 'genreId',
});

// Genre associations
Genre.belongsToMany(Movie, { 
    foreignKey: 'genreId',
    through: Genre,
});

module.exports = { Movie, Genre, User };