//TODO: create a page to route to user route, which will contain our user information and possible cookies 
//this index will direct the router to the backend routes for users, comments, and posts
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postboxRoutes");

//now we can set our paths 

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;