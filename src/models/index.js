const Actor = require('./Actor');
const Cast = require('./Cast');
const Genre = require('./Genre');
const Movie = require('./Movie');
const MovieGenres = require('./MovieGenres');
const User = require('./User');

// Actor associations
Actor.belongsTo(Cast, {
    foreignKey: 'actorID',
});

Actor.belongsToMany(Movie, { 
    through: Cast 
});

// Cast associations
Cast.belongsTo(Movie, {
    foreignKey: 'movieID',
});

Cast.hasMany(Actor, {
    foreignKey: 'actorID',
});

// Genre associations
Genre.belongsToMany(Movie, { 
    through: MovieGenres 
});

// Movie associations
Movie.hasMany(Actor, {
    foreignKey: 'actorID',
});

Movie.hasMany(Genre, {
    foreignKey: 'genreID',
});

module.exports = { Actor, Cast, Genre, Movie, MovieGenres, User };