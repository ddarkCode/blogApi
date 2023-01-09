import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <h4>Blog API</h4>{' '}
      <ul>
        {' '}
        <li>
          <Link to="/">Home</Link>
        </li>{' '}
        <li>
          <Link to="/pages/blogs">Blogs</Link>
        </li>{' '}
        <li>
          <Link to="/pages/signup">Signup</Link>
        </li>{' '}
        <li>
          <Link to="/pages/login">Login</Link>
        </li>{' '}
        <li>
          <Link to="/pages/new-blog">Add Blog</Link>
        </li>{' '}
      </ul>{' '}
    </nav>
  );
}

export default Header;
