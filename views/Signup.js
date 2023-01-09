import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signupUser } from '../redux/actions/user';

function Signup() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(user));
    setUser({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    });
    history.push('/');
  };

  return (
    <div id="auth-main">
      <h2>Register To Start Posting Blogs</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="first_name"
            placeholder="Enter Your First Name"
            name="first_name"
            onChange={handleChange}
            value={user.first_name}
          />
        </div>
        <div>
          <input
            id="last_name"
            placeholder="Enter Your Last Name"
            name="last_name"
            onChange={handleChange}
            value={user.last_name}
          />
        </div>

        <div>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            name="email"
            onChange={handleChange}
            value={user.email}
          />
        </div>

        <div>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

function loadData() {
  console.log('Hello From The Signup Page.');
}

export default {
  component: Signup,
  loadData,
};
