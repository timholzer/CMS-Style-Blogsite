  
const { User } = require('../models');

const userData = [{
        username: 'JohnDoe',
        email: 'john@dodo.com',
        password: 'johndoe'

    },
    {
        username: 'JohnDoh',
        email: 'jaaaaahn@dodo.com',
        password: 'johndoh'
    },
    {
        username: 'Bob',
        email: 'bobobo@gmail.com',
        password: 'bob'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;