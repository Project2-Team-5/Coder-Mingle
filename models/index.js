const User = require("./User")
const Profile = require("./Profile")
const Post = require("./Post")
const Match = require("./Match")
const Survey = require("./Survey")

User.hasOne(Profile,
    {
        onDelete: "CASCADE"
    })

Profile.belongsTo(User,
    {
        onDelete: "CASCADE"
    })

Post.belongsTo(User)

User.hasMany(Post,
    {
        onDelete: "CASCADE"
    })

User.belongsToMany(User, {
    through: Match,
    as: "match_one",
    foreignKey: "user_1",
    otherKey: "user_2"
})

User.belongsToMany(User, {
    through: Match,
    as: "match_two",
    foreignKey: "user_2",
    otherKey: "user_1"
})

User.hasOne(Survey, {
    onDelete: "CASCADE",
    foreignKey: "user_id"
})

module.exports={
    User,
    Profile,
    Post,
    Match,
    Survey
}