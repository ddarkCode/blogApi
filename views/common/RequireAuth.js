import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

function checkIfLoggedIn(Component) {
  function RequireAuth(props) {
    const {
      user: { token },
    } = useSelector((state) => state);
    if (token) {
      return <Component token={token} {...props} />;
    } else {
      return <Redirect to={'/pages/login'} />;
    }
  }
  return RequireAuth;
}

export default checkIfLoggedIn;
