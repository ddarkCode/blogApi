import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getSingleBlog } from '../redux/actions/blogs';
import { formatDate } from './common/utils';

function Blog() {
  const { blogId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBlog(blogId));
  }, []);

  const { blog } = useSelector((state) => state);

  return (
    <div id="blog-main">
      <h4>{blog.title}</h4>
      <div className="meta-details">
        <span>{formatDate(blog.createdAt)}</span>
        <span>{blog.author}</span>
      </div>
      <p>{blog.description}</p>
      <p>{blog.body}</p>
    </div>
  );
}

function loadData(store, blogId) {
  //   console.log('Blog Component Id: ', blogId);
  store.dispatch(getSingleBlog(blogId));
}

export default {
  component: Blog,
  loadData,
};
