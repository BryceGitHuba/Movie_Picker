const { Watchlist } = require('../models');

const watchlistData = [
  {
    userId: 1,
    movieId: 13,
  },
  {
    userId: 1,
    movieId: 14,
  },
  {
    userId: 2,
    movieId: 2,
  },
];

const seedWatchlist = () => Watchlist.bulkCreate(watchlistData);

module.exports = seedWatchlist;