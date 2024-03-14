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
    genre: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    plot: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    runTime: {
      type: DataTypes.INTEGER, // minutes
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'movi3',
  }
);

module.exports = Movie;