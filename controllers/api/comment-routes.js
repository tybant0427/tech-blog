const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//get comments 
router.get('/', (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});

//post new comment
router.post('/', withAuth, (req, res) => {
    if (req.session) {

    Comment.create({
        commentBody: req.body.commentBody, 
        postId: req.body.postId,
        userId: req.session.userId,
    })
        .then(commentData => res.json(commentData))

        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
});

module.exports = router;

