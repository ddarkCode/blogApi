import Joi from 'joi';

import logger from '../logger/logger';

const userValidatorObject = Joi.object({
  first_name: Joi.string().min(2).required(),
  last_name: Joi.string().min(2).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net', 'org'],
    },
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

export const userValidator = async (req, res, next) => {
  try {
    const value = await userValidatorObject.validateAsync(req.body);
    logger.info(value);
    next();
  } catch (err) {
    logger.info(err);
    next(err);
  }
};
