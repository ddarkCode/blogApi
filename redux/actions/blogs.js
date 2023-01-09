import axios from 'axios';

import { GET_ALL_BLOGS, GET_SINGLE_BLOG, POST_A_BLOG } from '../contants/blogs';

const getAllBlogsActionCreator = (payload) => {
  return {
    type: GET_ALL_BLOGS,
    payload,
  };
};

const postABlogActionCreator = (payload) => {
  return {
    type: POST_A_BLOG,
    payload,
  };
};

const getSingleBlogActionCreator = (payload) => {
  return {
    type: GET_SINGLE_BLOG,
    payload,
  };
};

export const getAllBlogs = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:4040/api/blogs');
    dispatch(getAllBlogsActionCreator(data.results));
  } catch (err) {
    console.log(err);
  }
};

export const postABlog = (blogDetails, token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4040/api/blogs/?blog_token=${token}`,
        blogDetails
      );
      dispatch(postABlogActionCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getSingleBlog = (blogId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:4040/api/blogs/${blogId}`
      );
      dispatch(getSingleBlogActionCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};
