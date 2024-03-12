const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MovieGenres extends Model {}

MovieGenres.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movieID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'movie',
            key: 'id',
          },
    },
    genreID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'genre',
            key: 'id',
          },
    },
  },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'genre',
    }
);

module.exports = MovieGenres;