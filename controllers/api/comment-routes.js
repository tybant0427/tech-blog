const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req, res) => {
    Comment.findAll({})
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err); 
            res.status(500).json(err); 
        })
});

// router.post('/', withAuth, async (req, res) => {
//     const body = req.body;
  
//     try {
//       const newComment = await Comment.create({
//         ...body,
//         userId: req.session.userId,
//       });
//       res.json(newComment);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

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

// router.delete('/:id', withAuth, (req, res) => {

//     Comment.destroy({
//         where: {
//             id: req.params.id 
//         }
//     }).then(commentData => {

//         if (!commentData) {
//             res.status(404).json({ message: 'No comment found' });
//             return;
//         }
//         res.json(commentData);
//     }).catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

module.exports = router;

