import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { loginUser } from '../redux/actions/user';

function Login() {
  const [user, setUser] = useState({
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
    dispatch(loginUser(user));
    setUser({
      email: '',
      password: '',
    });
    history.push('/');
  };
  return (
    <div id="auth-main">
      <h2>Login To Start Posting Blogs</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            name="email"
            value={user.email}
            onChange={handleChange}
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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

function loadData() {
  console.log('Hello From The Login Page');
}

export default {
  component: Login,
  loadData,
};
