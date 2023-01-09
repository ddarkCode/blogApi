import passport from 'passport';

import { localStrategy } from './strategies/localStrategy';
import { jwtStrategy } from './strategies/jwtStrategy';

export const passportConfig = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  localStrategy();
  jwtStrategy();

  passport.serializeUser((user, done) => {
    process.nextTick(() => {
      return done(null, user);
    });
  });

  passport.deserializeUser((user, done) => {
    process.nextTick(() => {
      return done(null, user);
    });
  });
};
