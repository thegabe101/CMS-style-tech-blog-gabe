// //TODO: create a route index
// //this will require envisioning all possible pages and directories website will require.
// //will start with ones I know I'll use, including api, login, and home

// //first we create our router const 
// const router =  require("express").Router();

// //will use a homepage route for base url
// const routeHome = require("./homeRoutes.js"); 
// //then we need some kind of login page. 
// const routeLogin = require("./loginRoutes.js");
// //then we will have a route for our API
// // const routeDash = require("./post-boxRoutes.js");
// // const routeComment = require("./commentRoutes.js");

// //Finally, specify paths for the router to use and export it.
// // router.use("/", routeHome);
// router.use("/loginRoutes", routeLogin);
// // router.use("/api", routeAPI);
// // router.use("/comment", routeComment);
// // router.use("/dashboard", routeDash);
// //seems we will need a dashboard route as well so will add that. 
// //Finally, accoreding to user story, we will need a comment route for when a user posts comments to a published story. 

// //TODO: Determine what other pages will be necessary and create the accordant routes. 

// const apiRoutes = require('./api');

// router.use('/home', routeHome);

// //homepage render
// // router.get('/',(req,res)=>{
// //     res.render("main")
// // })

// //login render
// router.get("/", (req,res)=>{
//     res.render("login")
// })


// router.use('/api', apiRoutes);




// module.exports = router;

const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const apiRoutes = require('./api');

//moving the frontend routes to the homeroutes js
//deleting extraneous route js and adding them to the frontend homeroutes rendering js 


router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
