//Here we will call next, which invokes the next middleware function in the app. 
//As the third argument that is passed to the middleware function, next aborts the current stack and assures the rest of the middleware will run.  
//The next() function could have been called anything here, but it seems to be conventionally named "next()". 

const authToken = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect("/login");
    } else {
        next();
    }
};

module.exports = authToken;