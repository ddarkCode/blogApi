import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { postABlog } from '../redux/actions/blogs';
import checkIfLoggedIn from './common/RequireAuth';

const NewBlog = (props) => {
  const dispatch = useDispatch();
  //   const { user } = useSelector((state) => state);

  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    tags: '',
    body: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postABlog(newBlog, props.token));
    setNewBlog({
      title: '',
      description: '',
      tags: '',
      body: '',
      author: '',
    });
  };
  return (
    <div id="newblog-main">
      <h2>Post A New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Enter Blog Title"
            name="title"
            required
            value={newBlog.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Enter Blog Description"
            name="description"
            required
            value={newBlog.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            placeholder="Enter The Name Of The Author If Not You"
            name="author"
            value={newBlog.author}
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            placeholder="Enter A Comma Separated Blog Tags If Any"
            name="tags"
            value={newBlog.tags}
            onChange={handleChange}
          />
        </div>
        <div className="textarea">
          <textarea
            placeholder="Blog Entries here"
            name="body"
            required
            value={newBlog.body}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
};

export default {
  component: checkIfLoggedIn(NewBlog),
};
