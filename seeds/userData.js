const { User } = require('../models');

const userData = [
  {
    username: 'sweet-symphony',
    // password: x24_b$D1Nv7TVB
    password: '$2b$10$5yQ5je4QIvRD808idowmW.4ZOBuSdR8MqFvqICDly5rYUvgmXNCHK',
  },
  {
    username: 'goofy71',
    // password: IhU}W1I4(1L9tt
    password: '$2b$10$P2w6P9gZLce7W0Au6a9AHurXYSTHCoXiDX01h6ejT1H8cgGbWqbKa',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;