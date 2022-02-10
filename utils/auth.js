// Middleware to check if user is logged in using req.session
const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect('/login');
  } else {
    next();
  }
};
  // If user is not logged in, redirect to login page
  // else continue to next middleware


module.exports = withAuth;
