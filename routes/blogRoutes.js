import { Router } from 'express';
import passport from 'passport';

import { blogController } from '../controllers/blogController';
import { blogValidator } from '../validators/blogValidator';

const {
  getAllPublishedBlogs,
  postBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} = blogController;

export const blogRoutes = () => {
  const blogRouter = Router();

  blogRouter
    .route('/')
    .get(getAllPublishedBlogs)
    .post(
      blogValidator,
      passport.authenticate('jwt', { session: false }),
      postBlog
    );
  blogRouter
    .route('/:blogId')
    .get(getSingleBlog)
    .patch(passport.authenticate('jwt', { session: false }), updateBlog)
    .delete(passport.authenticate('jwt', { session: false }), deleteBlog);

  return blogRouter;
};
