import { Strategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';

import logger from '../../logger/logger';

export const jwtStrategy = () => {
  const options = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter('blog_token'),
  };
  passport.use(
    new Strategy(options, (token, done) => {
      try {
        logger.info('JWT STRATEGY: ', token);
        return done(null, token);
      } catch (err) {
        logger.info('JWT Error: => ', err);
        return done(err);
      }
    })
  );
};
