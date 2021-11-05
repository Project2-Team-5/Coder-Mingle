const router = require('express').Router();
const userRoutes = require("./user-routes")
const matchRoutes = require("./match-routes")
const imageRoutes = require("./image-routes")
const errorRoutes = require("./error-routes")
const postRoutes = require("./post-routes")

router.use("/users", userRoutes)
router.use("/matches", matchRoutes)
router.use("/images", imageRoutes)
router.use("/errors", errorRoutes)
router.use("/post", postRoutes)

module.exports = router;