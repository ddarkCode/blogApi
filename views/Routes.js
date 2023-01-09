import React from 'react';

import App from './App';
import { HomePage } from './home';
import SignupPage from './Signup';
import LoginPage from './Login';
import Blogs from './Blogs';
import Blog from './Blog';
import NewBlog from './NewBlog';
import NotFound from './NotFound';

export const Routes = [
  {
    ...App,
    routes: [
      {
        path: '/',
        exact: true,
        ...HomePage,
      },
      {
        path: '/pages/signup',
        ...SignupPage,
      },
      {
        path: '/pages/login',
        ...LoginPage,
      },
      {
        path: '/pages/blogs',
        ...Blogs,
        exact: true,
      },
      {
        path: '/pages/new-blog',
        ...NewBlog,
        exact: true,
      },
      {
        path: '/pages/blogs/:blogId',
        ...Blog,
      },
      {
        ...NotFound,
      },
    ],
  },
];
