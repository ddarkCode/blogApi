import paginate from 'paginate-middleware';

import Blog from '../models/Blog';
import User from '../models/User';

import logger from '../logger/logger';

export const blogController = (function () {
  return {
    getAllPublishedBlogs: async (req, res) => {
      try {
        let {
          page = 1,
          limit = 10,
          author,
          title,
          tags,
          order_by = 'created_at',
          order = 'asc',
        } = req.query;

        const queryBy = { state: 'published' };

        if (author) {
          queryBy.author = author;
        }
        if (title) {
          queryBy.title = title;
        }
        if (tags) {
          queryBy.tags = { $regex: tags };
        }

        const sortQuery = {};

        const sortAtributes = order_by.split(',');

        for (let sortAttribute of sortAtributes) {
          if (order === 'asc') {
            sortQuery[sortAttribute] = 1;
          }
          if (order === 'desc') {
            sortQuery[sortAttribute] = -1;
          }
        }
        const blogs = await Blog.find(queryBy).sort(sortQuery);
        const result = paginate(blogs, +page, +limit);
        logger.info(result);
        result.results = result.results.reverse();

        return res.status(200).json(result);
      } catch (err) {
        logger.info(err);
        return res.status(500).json(err);
      }
    },
    postBlog: async (req, res) => {
      try {
        const { title, description, tags, body } = req.body;
        const newBlog = await Blog.create({
          title,
          description,
          author:
            req.body.author || req.user.first_name + ' ' + req.user.last_name,
          authorId: req.user._id,
          reading_time: `
            ${
              Math.ceil(body.length / 265) > 1
                ? Math.ceil(body.length / 265) + 'Mins'
                : Math.ceil(body.length / 265) + 'Min'
            }`,
          tags,
          body,
        });
        return res.status(201).json(newBlog);
      } catch (err) {
        logger.info(err);
        return res.status(500).json(err);
      }
    },
    getSingleBlog: async (req, res) => {
      try {
        const { blogId } = req.params;
        let foundBlog = await Blog.findOne({
          _id: blogId,
          state: 'published',
        });
        if (!foundBlog) {
          return res.status(404).json({ message: 'Blog not found.' });
        }

        foundBlog.read_count += 1;
        await foundBlog.save();
        let authorInfo = await User.findById(foundBlog.authorId);
        authorInfo = authorInfo.toJSON();
        delete authorInfo.password;
        const blogWithAuthorInfo = foundBlog.toJSON();
        blogWithAuthorInfo.infos = {};
        blogWithAuthorInfo.infos.author = authorInfo;

        return res.status(200).json(blogWithAuthorInfo);
      } catch (err) {
        logger.info(err);
        return res.status(500).json(err);
      }
    },
    updateBlog: async (req, res) => {
      try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (blog.authorId === req.user._id) {
          const updateInfo = await Blog.updateOne({ _id: blogId }, req.body);
          return res
            .status(200)
            .json({ updateInfo, message: 'Blog updated successfully.' });
        } else {
          return res
            .status(403)
            .json({ message: 'You can only update your blog.' });
        }
      } catch (err) {
        logger.info(err);
        return res.status(500).json(err);
      }
    },
    deleteBlog: async (req, res) => {
      try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (blog.authorId === req.user._id) {
          const deleteInfo = await Blog.deleteOne({ _id: blogId });
          return res
            .status(200)
            .json({ deleteInfo, message: 'Blog Deleted successfully.' });
        } else {
          return res
            .status(403)
            .json({ message: 'You can only delete your blog.' });
        }
      } catch (err) {
        logger.info(err);
        return res.status(500).json(err);
      }
    },
  };
})();
