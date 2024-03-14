const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cast extends Model {}

Cast.init(
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
    actorID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'actor',
            key: 'id',
          },
    },
  },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'cast',
    }
);

module.exports = Cast;