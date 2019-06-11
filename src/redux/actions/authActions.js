import  { USER_LOGIN, USER_LOGOUT, USER_LOADED } from './types';
import axios from 'axios';
import adminService from '../../api/admin';

export const login = (email, password) => async dispatch => {
  try {
    const res = await adminService.login(email, password)
    dispatch({
      type: USER_LOGIN,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const loadUser = () => async dispatch => {
  const token = localStorage.getItem('token');
  const res = await adminService.getAdminData(token);

  console.log(res.data)
  dispatch({
    type: USER_LOADED,
    payload: res.data
  });
}