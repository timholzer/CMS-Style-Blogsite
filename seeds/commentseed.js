
const { Comment } = require('../models');

const commentData = [{
        comment_text: "Test 234",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "NicE1one",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I spilled my water!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;