const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

// class Post extends Model { }


// //post model will require id, title, content, date posted, and user id which we can form as user_id. will also want to freeze table name and label model as post
// Post.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,
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
//             },
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'post',
//     }
// );
//export post model


//Going to simplify this model a bunch as well. All we need for a post is a title and a body. 
//We can write the associations in such a way that we shouldn't need a foreign key for either post or comment.
//We will simply define one-way relationships and make post/comment belong to user. I suppose a post will also have comments (not sure yet in this scenario whether a comment would belong to posts.) 

class Post extends Model { }

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize,
    }
)

module.exports = Post;