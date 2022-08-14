//post routes will be somewhat similar to userroutes.
//There will be a few differences.
//1: we need to require all models, as posts belong to users and have comments
//2: we need an authorization function, which we have boilerplate from the project. this is a middleware that checks to see a user is logged in before allowing a certain route action
//3: will be heavily reliant on the associations in our models, so if those aren't correct (though I simplified them), nothing here will work. 


const { User, Post, Comment } = require('../../models');
const router = require('express').Router();
const authToken = require('../../utils/authToken');

router.post("/", authToken, (req, res) => {
    const postBody = req.body;
    //can use rest syntax here in order grab all the keys from our post object 
    Post.create({ ...postBody, user_id: req.session.user_id }).then(createdPost => {
        res.json(createdPost);
    }).catch(err => {
        res.status(500).json(err);
    });
});


//delete and update can be nearly the same. in both we ask for an auth token and then use the destroy/update methods on the body where the query is matching the params id 
router.delete("/:id", authToken, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        }
    }).then(deletedContent => {
        if (deletedContent > 0) {
            res.status(200).end();
        } else {
            res.status(404).end;
        }
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.put("/:id", authToken, (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(updatedContent => {
            if (updatedContent > 0) {
                res.status(200).end();
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;