const {Post} = require("../models")

const postData = [
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 3,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 4,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 5,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 5,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 6,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "Wow, this is a comment!",
        userId: 1,
        authorId: 2,
    },
    {
        comment: "A second comment!",
        userId: 1,
        authorId: 2,
    }
]

const seedPosts = () => Post.bulkCreate(postData)

module.exports = seedPosts