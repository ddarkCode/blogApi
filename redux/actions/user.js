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
        'http://localhost:4040/api/auth/signup',
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
        'http://localhost:4040/api/auth/login',
        userData
      );
      console.log('Login User Action: ', data);
      dispatch(loginUserActionCreator(data));
    } catch (err) {
      console.log(err);
    }
  };
};
