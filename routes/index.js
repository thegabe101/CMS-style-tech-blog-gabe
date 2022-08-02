//TODO: create a route index
//this will require envisioning all possible pages and directories website will require.
//will start with ones I know I'll use, including api, login, and home

//first we create our router const 
const router =  require("express").Router();

//will use a homepage route for base url
const routeHome = require("./homeRoutes.js"); 
//then we need some kind of login page. 
const routeLogin = require("./loginRoutes.js");
//then we will have a route for our API
const routeAPI = require("./api.js");
const routeDash = require("./dashboardRoutes.js");
const routeComment = require("./commentRoutes.js");

//Finally, specify paths for the router to use and export it.
router.use("/", routeHome);
router.use("/login", routeLogin);
router.use("/api", routeAPI);
router.use("/comment", routeComment);
router.use("/dashbaord", routeDash);
//seems we will need a dashboard route as well so will add that. 
//Finally, accoreding to user story, we will need a comment route for when a user posts comments to a published story. 

//TODO: Determine what other pages will be necessary and create the accordant routes. 

module.exports = router;