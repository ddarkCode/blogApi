import Joi from 'joi';

import logger from '../logger/logger';

const blogValidatorObject = Joi.object({
  title: Joi.string().min(5).max(255).required(),
  description: Joi.string(),
  author: Joi.string().optional(),
  authorId: Joi.string().optional(),
  state: Joi.string().default('draft'),
  tags: Joi.string().default(''),
  read_count: Joi.number().default(0),
  reading_time: Joi.string(),
  body: Joi.string().required(),
});

export const blogValidator = async (req, res, next) => {
  try {
    const value = await blogValidatorObject.validateAsync(req.body);
    logger.info(value);
    next();
  } catch (err) {
    logger.error(err);
    next(err);
  }
};
