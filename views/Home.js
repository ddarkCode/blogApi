import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section id="home-section">
      <h2>Welcome To The Blog API Project</h2>
      <ul>
        <li>
          <Link to="/pages/login">Login or register to post new blog</Link>
        </li>
        <li>
          <Link to="/pages/blogs">View all published blogs</Link>
        </li>
      </ul>{' '}
    </section>
  );
}

function loadData() {
  return (function () {
    console.log('Hello From The Home Page');
  })();
}
export const HomePage = {
  component: Home,
  loadData,
};
