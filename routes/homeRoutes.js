const router = require("express").Router();
//need to require our models for when we write our get routes, which will get and render user posts or a post by id. 
const { User, Post, Comment } = require("../models");


//deleting our basic home route and changing the path to home to be session-based. If a user is not logged in home will not be rendered until they are. 

//added a signup route that will redirect to home page if a session token already exists (meaning the user is recognized as existing and already has a session in the browser)
router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("signup");
});

//rewrote login wrote to seek session token. if the session token exists, the user is redirected to the homepage. if not, they are unrecognized and sent to the login page. 
router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect("/");
        return;
    }
    res.render("login");
});


module.exports = router