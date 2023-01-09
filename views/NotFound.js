import React from 'react';
import { Link } from 'react-router-dom';

function NotFound({ staticContext = {} }) {
  staticContext.notFound = true;
  console.log(`Not found page: ${JSON.stringify(staticContext)}`);
  return (
    <div id="notFound-main">
      <h2>404</h2>
      <p>Sorry, page not found.</p>

      <Link to={'/'}>Back Home</Link>
    </div>
  );
}

export default {
  component: NotFound,
};
