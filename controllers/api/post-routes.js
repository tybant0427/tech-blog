const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

//create a post
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
      console.log(body);
    try {
      const postData = await Post.create({ ...body, userId: req.session.userId });
      console.log("new post: ",  postData);
      res.json(postData);
       } catch (err) {
         console.log('failed', err);
      res.status(500).json(err);
    }
  });

//update a post
  router.put('/:id', withAuth, async (req, res) => {
    try {
      console.log('here is the req.body', req.body);
      const [rows] = await Post.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (rows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //delete a post
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const [rows] = Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (rows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  

module.exports = router;