import axios from 'axios';

import { SIGN_UP_USER, LOGIN_USER } from '../contants/user';

const signupActionCreator = (payload) => ({
  type: SIGN_UP_USER,
  payload,
});

const loginUserActionCreator = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const signupUser = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `https://blog-api-project-v2.onrender.com/api/auth/signup`,
        userData
      );
      dispatch(signupActionCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `https://blog-api-project-v2.onrender.com/api/auth/login`,
        userData
      );
      dispatch(loginUserActionCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};
