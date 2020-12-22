  
const { User } = require('../models');

const userData = [{
        username: 'JohnDoe',
        password: 'johndoe'

    },
    {
        username: 'JohnDoh',
        password: 'johndoh'
    },
    {
        username: 'Bob',
        password: 'bob'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;