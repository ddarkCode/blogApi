import { SIGN_UP_USER, LOGIN_USER } from '../contants/user';

export const user = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP_USER:
      return action.payload;
    case LOGIN_USER:
      return action.payload;
    default:
      return state;
  }
};
