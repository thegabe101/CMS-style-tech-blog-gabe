
require("dotenv").config();

const Sequelize = require("sequelize");

let sequelize;


//use JAWS url environment or switch to localhost sql login with that sequelize if not
if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306
        }
    );
}

module.exports = sequelize;