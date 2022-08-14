const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model { }
//after having issues with this class, I am going to try to simplify it. 
//I am not sure what the DRM will look like yet, but I do know what a comment looks like. 
//I don't think I need to set it up with so many attributes. Will simplify for the sake of making it work first, then can add additional info like date published later. 

// Comment.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         content: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         date: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue: DataTypes.NOW,
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         },
//         post_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'post',
//                 key: 'id'
//             },
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'comment',
//     }
// );

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize
    }
);

//not sure we need anything else for now. no need to freeze table name, set model name, etc. 

module.exports = Comment;