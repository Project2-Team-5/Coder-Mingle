const User = require("./User")
const Post = require("./Post")
const First_Match = require("./First_Match")
const Second_Match = require("./Second_Match")
const Survey = require("./Survey")

User.hasOne(Survey)

Survey.belongsTo(User)

Post.belongsTo(User)

User.hasMany(Post,
    {
        onDelete: "CASCADE"
    })

User.belongsToMany(User, {
    through: First_Match,
    as: "match_one",
    foreignKey: "user_1",
    otherKey: "user_2"
})

User.belongsToMany(User, {
    through: Second_Match,
    as: "match_two",
    foreignKey: "user_1",
    otherKey: "user_2"
})

module.exports={
    User,
    Post,
    First_Match,
    Second_Match,
    Survey
}