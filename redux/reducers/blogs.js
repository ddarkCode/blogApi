import { GET_ALL_BLOGS, GET_SINGLE_BLOG, POST_A_BLOG } from '../contants/blogs';

export const blogs = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return action.payload;
    case POST_A_BLOG:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const blog = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_BLOG:
      return action.payload;

    default:
      return state;
  }
};
