const {Post} = require("../models")

const postData = [
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 2,
        authorId: 3,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 3,
        authorId: 4,
    },
    {
        comment: "A second comment!",
        userId: 4,
        authorId: 5,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 5,
        authorId: 6,
    },
    {
        comment: "A second comment!",
        userId: 6,
        authorId: 7,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 7,
        authorId: 8,
    },
    {
        comment: "A second comment!",
        userId: 8,
        authorId: 9,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 9,
        authorId: 10,
    },
    {
        comment: "A second comment!",
        userId: 10,
        authorId: 11,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 11,
        authorId: 12,
    },
    {
        comment: "A second comment!",
        userId: 12,
        authorId: 1,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 2,
        authorId: 3,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 3,
        authorId: 4,
    },
    {
        comment: "A second comment!",
        userId: 4,
        authorId: 5,
    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts