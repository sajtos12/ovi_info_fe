import {
  TOKEN_LOADED,
  TOKEN_LOADING,
  TOKEN_ERROR,
  TOKEN_CLEAR
} from "../constants/action-types";

const initialState = {
  token: null,
  status: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOKEN_LOADING:
      return Object.assign({}, state, {
        token: null,
        status: false
      });
    case TOKEN_LOADED:
      return Object.assign({}, state, {
        token: action.payload,
        status: true
      });
    case TOKEN_ERROR:
      return Object.assign({}, state, {
        status: false
      });
    case TOKEN_CLEAR:
      return Object.assign({}, state, {
        token: null,
        status: false
      });
    default:
      return state;
  }
};

export default loginReducer;
