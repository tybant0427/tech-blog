const router = require('express').Router();
const { User } = require('../../models');
// const withAuth = require('../../utils/auth');


//new user signup
router.post('/', async (req, res) => {
  console.log(req.body)
    try {
      const userData = await User.create({
        username: req.body.username,
        password: req.body.password
      });
  
        req.session.save(() => {
        req.session.userId = userData.id;
        req.session.username = userData.username;
        req.session.loggedIn = true;
  
        res.json(userData);
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

/// user login
  router.post('/login', async (req, res) => {

    try {
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!user) {
        res.status(400).json({ message: 'No user found' });

        return;
      }
  
      const goodPw = user.checkPassword(req.body.password);
        if (!goodPw) {
        res.status(400).json({ message: 'No user found' });
        
        return;
      }
  
      req.session.save(() => {
        req.session.userId = user.id;
        req.session.username = user.username;
        req.session.loggedIn = true;
  
        res.json({ user, message: 'logged in' });
      });

    } catch (err) {
      res.status(400).json({ message: 'No account found' });
    }
  });
  

  //logout
  router.post('/logout', (req, res) => {

    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });

    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;