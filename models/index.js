//we know we will have three primary models. I have not determined the relationships yet but can create the index of models.
//these should be user, post, and comment, post being different from comment in that a post has many comments and a post belongs to a user as well as a comment, but a post does not belong to a comment. 

const User = require('./userModel');
const Post = require('./postModel');
const Comment = require('./commentModel');

//we can say with some degree of certainty that the foreign keys will be arranged like such:
//post foreign key is userId and a comment foreign key is UserId as well in order to associate those artifacts with their users. 
//we also know we will be required to export our modules, so I will do that now before I forget. 

module.exports = {
    User,
    Comment, 
    Post
};