import { Router } from 'express';
import passport from 'passport';
// import User from '../models/User';

import { authorController } from '../controllers/authorController';

const { getAuthorBlogs, getAuthorBlog } = authorController;

export const authorRoutes = () => {
  const authorRouter = Router();

  authorRouter
    .route('/:authorId/blogs')
    .get(passport.authenticate('jwt', { session: false }), getAuthorBlogs);

  authorRouter
    .route('/:authorId/blogs/:blogId')
    .get(passport.authenticate('jwt', { session: false }), getAuthorBlog);
  return authorRouter;
};
