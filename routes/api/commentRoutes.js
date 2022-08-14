const { Comment } = require('../../models');
const router = require("express").Router();
const authToken = require('../../utils/authToken');

//we are not going to allow for deletion or editing of comments, so only a post create route will be required

router.post("/", authToken, (req, res) => {
    Comment.create({ ...req.body, userId: req.session.userId })
        .then(newComment => {
            res.json(newComment);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;