const Actor = require('./Actor');
const Cast = require('./Cast');
const Genre = require('./Genre');
const Movie = require('./Movie');
const MovieGenres = require('./MovieGenres');
const User = require('./User');

// Actor associations
// Actor.belongsTo(Cast, {
//     foreignKey: 'actorID',
// });

// Actor.hasMany(Movie, { 
//     through: Cast 
// });

// // Cast associations
// Cast.hasMany(Movie, {
//     foreignKey: 'movieID',
// });

// Cast.hasMany(Actor, {
//     foreignKey: 'actorID',
// });

// Genre associations
// Genre.belongsToMany(Movie, { 
//     through: MovieGenres ,
//     foreignKey: 'genreId'
// });

// Movie associations
// Movie.hasMany(Actor, {
//     foreignKey: 'actorID',
// });

// Movie.hasMany(Genre, {
//     foreignKey: 'genreID',
// });

module.exports = { Actor, Cast, Genre, Movie, MovieGenres, User };