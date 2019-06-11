import  { USER_LOGIN, USER_LOGOUT } from './types';
import axios from 'axios';
import adminService from '../../api/admin';

export const login = (email, password) => async dispatch => {
  const body = JSON.stringify({ email, password });
  try {
    const res = await adminService.login(email, password)

    console.log(res.data)

    dispatch({
      type: USER_LOGIN,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}