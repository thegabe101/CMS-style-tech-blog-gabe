const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//need to require bcrypt in order to created a hashed pw 
const bcrypt = require('bcrypt');
class User extends Model {
    checkPassword(userLoginPW) {
        //return and sync encrypted password for user model 
        return bcrypt.compareSync(userLoginPW, this.password);
    }
}

//will have four properties for user: a primary key id, a name, email, and password. very standard approach 
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this validate is to ensure that the chosen password is 8 characters or more 
                len: [8],
            },
        },
    },
    //now we create a hook with the beforeCreate method to work with the data before a new instance is created 
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        // sequelize,
        // timestamps: false,
        // freezeTableName: true,
        // underscored: true,
        // modelName: 'user',
    }
);

module.exports = User;