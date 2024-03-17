const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movie extends Model {}

Movie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'genre',
            key: 'id',
          },
    },
    plot: {
      type:DataTypes.TEXT,
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.DATEONLY, // 2024-3-11
      allowNull: true,
    },
    runtime: {
      type: DataTypes.INTEGER, // minutes
      allowNull: true,
    },
    poster: {
      type: DataTypes.STRING, // link such as https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_SX300.jpg
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: 'movie',
  }
);

module.exports = Movie;