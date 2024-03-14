// userPreferencesModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming you have a database configuration file

const UserPreferences = sequelize.define('UserPreferences', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  favoriteGenre: {
    type: DataTypes.STRING,
    allowNull: true
  },
  favoriteDirector: {
    type: DataTypes.STRING,
    allowNull: true
  },
  // Add more preferences as needed
}, {
  tableName: 'user_preferences', // Define the table name if different from the model name
  timestamps: false // Disable timestamps for simplicity
});

module.exports = UserPreferences;