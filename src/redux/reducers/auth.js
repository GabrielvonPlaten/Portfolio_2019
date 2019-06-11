import { USER_LOGIN, USER_LOGOUT, USER_LOADED } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  user: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload,
      }
    case USER_LOGIN:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: payload.user
      };
    case USER_LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: null,
        user: null,
      };

    default:
      return state
  }
}