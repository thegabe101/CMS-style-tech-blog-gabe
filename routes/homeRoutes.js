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

//now we need a findAll route for users + a findByPk for users if we want to find a SINGLE post from that user 

//to get all users posts on the homepage, we use findall and include model user. This finds all users, then we make a map of alll post data and render it as a handlebars view with all posts contained

router.get('/', req, res => {
    Post.findAll({
        include: [User],
    }).then((postData) => {
        //map all posts into an array and get the plain data
        const allPosts = postData.map((allPosts) =>
            allPosts.get({ plain: true }))
        //route to existingPosts handlebars
        res.render("existingPosts", { allPosts });
    }).catch((err) => {
        res.status(500).json(err);
    });
});

//to get a post by id and display it alone we can do something similar, but this time we need to find by req.params.id

router.get("/post/:id", (req, res) => {
    Post.findByPk(req.params.id, {
        include: [
            User,
            {
                model: comment,
                include: [User],
            },
        ],
    }).then((indPostData) => {
        if (indPostData) {
            const indPost = indPostData.get({ plain: true });
            res.render("post-box", { indPost });
        } else {
            res.status(404, { msg: 'Sorry, no matching page could be found.' }).end();
        }
    }).catch((err) => {
        res.status(500).json(err);
    });
});


module.exports = router