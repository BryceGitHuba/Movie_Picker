const Genre = require('./Genre');
const Movie = require('./Movie');
const User = require('./User');

// 1:M Association

// Parent table = Genre
// Genre can have 0+ movies
Genre.hasMany(Movie, { foreignKey: 'genreId' });

// Child table = Movie (FK references PK of Genre)
// Movie belongs to one genre
Movie.belongsTo(Genre, { foreignKey: 'genreId' });

// M:M Association
// User has 0+ favorite movies, and a movie can be favorited by 0+ users
// User.belongsToMany(Movie, { through: 'LikedMovies' })

module.exports = { Genre, Movie };