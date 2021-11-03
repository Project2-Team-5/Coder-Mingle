// this is a helper function to identify a user based on request

function getCurrentUserOrById (req) {
    let userId
    if (req.query && req.query.id) {
        userId = req.query.id
    } else {
        userId = req.session.user_id
    } 
    return userId
} 

module.exports = getCurrentUserOrById;