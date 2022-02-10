const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const sequelize = require('../../config/config');
const withAuth = require('../../utils/auth');



  

module.exports = router;