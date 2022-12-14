import passport from 'passport';
import { Strategy } from 'passport-local';

import User from '../../models/User';

import logger from '../../logger/logger';

export const localStrategy = () => {
  passport.use(
    'login',
    new Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, { message: 'User Not Found!' });
          }
          if (!user.verifyPassword(password)) {
            return done(null, false, { message: 'Incorrect Password' });
          }
          return done(null, user, { message: 'User Logged in successfully.' });
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.use(
    'signup',
    new Strategy(
      { usernameField: 'email', passReqToCallback: true },
      async (req, email, password, done) => {
        try {
          const { first_name, last_name } = req.body;
          const emailTest = /(\w+)\@(\w+)\.[a-zA-Z]/g;
          if (!emailTest.test(email)) {
            throw new Error('Please enter a valid email address.');
          }
          const user = await User.create({
            email: email.toLowerCase(),
            first_name,
            last_name,
            password,
          });
          done(null, user);
        } catch (err) {
          logger.info(err);
          done(err);
        }
      }
    )
  );
};
