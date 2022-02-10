
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/config');

module.exports = router;
