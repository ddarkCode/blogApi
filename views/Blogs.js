import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllBlogs } from '../redux/actions/blogs';
import { formatDate } from './common/utils';

function Blogs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);
  const { blogs } = useSelector((state) => state);

  return (
    <div id="blogs-main">
      <h2>All Published Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h4>{blog.title}</h4>
            <div className="meta-details">
              <span>{formatDate(blog.createdAt)}</span>
              <span>{blog.author}</span>
            </div>
            <p>{blog.description}</p>
            {/* <p>{blog.body.substr(0, 400)}</p> */}

            <Link to={`/pages/blogs/${blog._id}`}>Read More...</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function loadData(store) {
  store.dispatch(getAllBlogs());
}

export default {
  component: Blogs,
  loadData,
};