import axios from 'axios';
import {
  TOKEN_LOADING,
  TOKEN_LOADED,
  TOKEN_ERROR,
  TOKEN_CLEAR,
} from '../constants/action-types';

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: TOKEN_LOADING });
    await axios
      .post('http://localhost:8080/login', {
        userName: username,
        password: password,
      })
      .then(async (response) => {
        const tokenToSave = 'Bearer ' + response.data.token;
        await dispatch({
          type: TOKEN_LOADED,
          payload: response.data,
        });
        localStorage.setItem('token', tokenToSave);
      })
      .catch((err) => {
        dispatch({ type: TOKEN_ERROR });
        console.log(err.message);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: TOKEN_CLEAR });
    localStorage.removeItem('token');
  };
};
