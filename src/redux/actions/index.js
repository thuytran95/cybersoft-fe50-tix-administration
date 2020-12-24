import * as actions from "./actionTypes";

export const LOGIN_SUCCESSFUL = () => {
  return {
    type: actions.LOGIN_SUCCESSFUL,
    payload: "Login successfully!",
  };
};

export const LOGIN_FAILED = () => {
  return {
    type: actions.LOGIN_FAILED,
    payload: "Incorrect username or password",
  };
};

export const LOGOUT = () => {
  return {
    type: actions.LOGOUT,
  };
};

export const SET_USERNAME = (e) => {
  return {
    type: actions.SET_USERNAME,
    payload: e.target.value,
  };
};

export const SET_PASSWORD = (e) => {
  return {
    type: actions.SET_PASSWORD,
    payload: e.target.value,
  };
};

export const CLONE_TAB = (e) => {
  return {
    type: actions.CLONE_TAB,
  };
};

export const CLEAR_TAB = () => {
  return {
    type: actions.CLEAR_TAB,
  }
}