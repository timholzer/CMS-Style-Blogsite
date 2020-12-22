const { Post } = require('../models');

const postData = [{
        title: 'Hello',
        content: 'Well Hai!',
        user_id: 1

    },
    {
        title: 'Hello',
        content: 'Worl',
        user_id: 2
    },
    {
        title: 'Test',
        content: 'Test, Test, Test, Test, etc.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;