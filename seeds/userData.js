const { User } = require("../models");

const userData = [
  {
    username: '',
    password: '',
  },
  {
    username: '',
    password: '',
  },
  {
    username: '',
    password: '',
   },
];

const userData = () => User.bulkCreate(userData);

module.exports = userData;