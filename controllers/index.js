const router = require('express').Router();
const apiRoutes = require("./api")
const appRoutes = require("./app-routes")


router.use("/api", apiRoutes)
router.use('/',appRoutes)


module.exports = router;