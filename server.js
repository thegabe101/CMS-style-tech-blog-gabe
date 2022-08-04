//TODO: Fill out const requirements

const Router = require("./routes");
const session = require("express-session");
const sequelizeStore = require("connect-session-sequelize")(session.Store);
const handlebars = require("express-handlebars");
const sequelize = require("./config/connection.js");
const express = require("express");
const path = require("path");
//fairly sure that's all we need but will find out more in class today
const sess = {
    secret: "nosecret",
    saveUnitialized: false,
    reserve: false,
    store: new sequelizeStore ({
        db: sequelize
    })
}
//set up our port and app
const PORT = process.env.PORT || 3001;
const app = express();
//next we'll get our handlebars engine set up

const bars = handlebars.create();
//first we set engine
app.engine("handlebars", bars.engine);
app.set("view engine", "handlebars");
//now we create a session
app.use(session(sess));

//now we supply boilerplate middleware to make sure we are looking for our public files correctly. 
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));
//TODO: have CSS in wrong folder right now- needs to go to static public folder

//finally, instruct our app to use our router
app.use(Router)

//next we need to create a session instance. im not sure how to do this yet so will wait till after class. 
//TODO: create session
//learned how to make a session in class today. first we need to require sequelizestore, which we will do up above. 
//next, we declare a session with several parameters



//finally we can set up our sequelize sync and port listen
sequelize.sync({force: false}).then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log("The server is now online. Please navigate to localhost 8080 or to your environmental port.");
    });;
});

//TODO: Set up views folder and begin handlebars
