import { UserActionTypes } from "./types";
import axios from "axios";

/**
 * LOGIN ACTION
 * @returns ACTION
 */
export const loginStart = () => ({
  type: UserActionTypes.LOGIN_START,
});

export const loginSuccess = (user, token) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const loginError = (error) => ({
  type: UserActionTypes.LOGIN_ERROR,
  payload: {
    error,
  },
});

/**
 * SIGNUP ACTION
 * @returns ACTION
 */
export const signUpStart = () => ({
  type: UserActionTypes.SIGN_UP_START,
});

export const signUpSuccess = (user, token) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: {
    token,
    user,
  },
});

export const signUpError = (error) => ({
  type: UserActionTypes.SIGN_UP_ERROR,
  payload: {
    error,
  },
});

export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
});

// Fetch Single User
export const fetchUserStart = () => ({
  type: UserActionTypes.USER_FETCH_START,
});

export const fetchUserSuccess = (user) => ({
  type: UserActionTypes.USER_FETCH_SUCCESS,
  payload: {
    user,
  },
});

export const fetchUserError = (error) => ({
  type: UserActionTypes.USER_FETCH_ERROR,
  payload: {
    error,
  },
});


/**
 * Asyn Action creator
 */

export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(loginStart());
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/users/login`,
        {
          email,
          password,
        }
      );
      dispatch(loginSuccess(response.data.user, response.data.token));
    } catch (err) {
      dispatch(loginError(err));
    }
  };
};

export const signUpAsync = (formData) => {
  return async (dispatch, getState) => {
    dispatch(signUpStart());
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/users/register`,
        formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
      dispatch(signUpSuccess(response.data.user, response.data.token));
    } catch (err) {
        console.log("eerrrrrr",err)
      dispatch(signUpError(err));
    }
  };
};

export const fetchUserAsync = () => {
  return async (dispatch, getState) => {
    const {
      user: { token },
    } = getState();
    try {
      dispatch(fetchUserStart());
      const response = await axios.get(
        `http://localhost:8000/api/v1/users/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      dispatch(fetchUserSuccess(response.data.user));
    } catch (err) {
      dispatch(fetchUserError(err));
    }
  };
};


