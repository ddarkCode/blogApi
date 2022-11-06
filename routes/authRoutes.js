const { Router } = require('express');
const passport = require('passport');
const log = require('debug')('app:authRoutes');

const { signup, login } = require('../controllers/authController');

module.exports = function authRoutes() {
  const authRouter = Router();
  authRouter
    .route('/signup')
    .post(passport.authenticate('signup', { session: false }), signup);

  authRouter.route('/login').post(async (req, res) =>
    passport.authenticate('login', (err, user, info) => {
      login(req, res, { err, user, info });
    })(req, res)
  );
  return authRouter;
};
