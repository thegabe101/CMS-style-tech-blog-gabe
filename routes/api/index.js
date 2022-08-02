//TODO: create a page to route to user route, which will contain our user information and possible cookies 

const userRoutes = require("./userRoutes");

const router = require("express").Router();

router.use("/", userRoutes)

module.exports = router;