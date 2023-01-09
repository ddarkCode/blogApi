import paginate from 'paginate-middleware';

import logger from '../logger/logger';
import Blog from '../models/Blog';

export const authorController = (function controller() {
  return {
    getAuthorBlogs: async (req, res) => {
      try {
        if (req.user._id === req.params.authorId) {
          let { page = 1, limit = 10 } = req.query;

          const queryBy = {
            authorId: req.user._id,
          };

          if (req.query.state) {
            queryBy.state = req.query.state;
          }
          const blogs = await Blog.find(queryBy);

          const result = paginate(blogs, +page, +limit);

          return res.status(200).json(result);
        } else {
          return res.status(403).json({
            message: 'Can only view your own list of published and draft blogs',
          });
        }
      } catch (err) {
        logger.info(err);
        return res.status(500).json(err);
      }
    },
    getAuthorBlog: async (req, res) => {
      const { authorId, blogId } = req.params;
      try {
        if (authorId === req.user._id) {
          const blog = await Blog.findOne({ _id: blogId, authorId });
          if (!blog) {
            return res.status(404).json({ message: 'Blog not found.' });
          }
          return res.status(200).json(blog);
        }
      } catch (err) {
        logger.info(err);
        return res.status(500).json(err);
      }
    },
  };
})();
