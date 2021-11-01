const seedUsers = require("./user-seeds")
const seedProfiles = require("./profile-seeds")
const seedPosts = require("./post-seeds")
const seedMatches = require("./match-seeds")

const sequelize = require("../config/connection")

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n-----DATABASE SYNCED-----\n')
    await seedUsers()
    console.log('\n-----USERS SEEDED-----')
    await seedProfiles()
    console.log('\n-----PROFILES SEEDED-----')
    await seedPosts()
    console.log('\n-----POSTS SEEDED-----')
    await seedMatches()
    console.log('\n-----MATCHES SEEDED-----')
    process.exit(0)
}

seedAll()