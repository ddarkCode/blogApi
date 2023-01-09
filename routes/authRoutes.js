import { Router } from 'express';
import passport from 'passport';
import logger from '../logger/logger';
import { sign } from 'jsonwebtoken';

import { authController } from '../controllers/authController';

const { signup, login } = authController;

import { userValidator } from '../validators/userValidator';

export const authRoutes = () => {
  const authRouter = Router();
  authRouter
    .route('/signup')

    .post(
      userValidator, passport.authenticate('signup', { session: false }),
      signup
    );

  authRouter
    .route('/login')

    .post(async (req, res, next) =>
      passport.authenticate('login', (err, user, info) => {
        login(req, res, { err, user, info });
      })(req, res)
    );
  return authRouter;
};
