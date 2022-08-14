//now we neeed to create our backend user routes for logging in, logging out, deleting an account, etc. 

const router = require('express').Router();

//need to require our user model, of course 
const { User } = require('../../models');

//we'll work on our signup, login, and logout routes because they are all post routes. 

//starting with signup, we'll use the create method. 
//this will create a user body object with our model params (username, email, pw)


//ROUTE is /api/users
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
        //then respond with parameter userData, saving it as a session with object keys user_id, username, email, loggedIn token which can be used later.
    }).then(userData => {
        req.session.save(() => {
            req.session.user_id = userData.id,
                req.session.username = userData.username,
                req.session.email = userData.email,
                req.session.loggedIn = true;

            //res with data
            res.json(userData);
            console.log(userData);
        });
    }).catch(err => {
        console.log("We're sorry, something went wrong.");
        res.status(500).json(err);
    });
});

//our login will take a very similar route, but needs to have some kind of password validating component
//we can use the username param to findone any one user in the database. if the req validates there is a username with that string seq, proceed. if not throw an alert


//ROUTE is /api/users/login 
router.post("/login", (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
        }
        //if that username doesn't exist, throw status
    }).then(userData => {
        if (!userData) {
            res.status(404).json({ msg: 'Sorry, no user with that username was found in our database.' })
            return;
        }

        //use checkPassword method to check the entered pw against the req body password from the User.findone of model
        const goodPw = userData.checkPassword(req.body.password);

        if (!goodPw) {
            res.status(404).json({ msg: 'We\'re sorry, that password appears to be incorrect.' });
            return;
        }

        console.log(res.session.username);

        //if a success, we save the login information here as a session. 
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.loggedIn = true;

            res.json({ user: userData, msg: 'Successful login' });
        })
    })
});

//logout should be very simple. all we need to do is destroy the session data on a condition of IF someone is logged in. 

router.post('/logout', (req, res) => {
    //if there is a login token
    if (req.session.loggedIn) {
        //destroy entire session information
        req.session.destroy(() => {
            res.status(204).end();
            console.log("successfully logged out");
        });
    }
    else {
        res.status(404).end();
        console.log("something went wrong");
    }
});


//we can delete a user by id
router.delete("/user/:id", (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        }
    })
        .then(userData => {
            if (!userData) {
                res.status(404).json({ msg: 'No user with that id was found in our database.' });
                return;
            }
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
