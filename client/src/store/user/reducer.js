import { UserActionTypes } from "./types";
import Cookies from "js-cookie";

const authCookies = Cookies.get("AUTH") || JSON.stringify({});
const INITIAL_STATE = {
  loginLoading: false,
  signUpLoading: false,
  fetchUserLoading: false,
  user: null,
  token: null,
  signUpError: null,
  loginError: null,
  fetchUserError: null,
  ...JSON.parse(authCookies),
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_START:
      return {
        ...state,
        loginError: null,
        loginLoading: true,
      };
    case UserActionTypes.LOGIN_SUCCESS:
      Cookies.set(
        "AUTH",
        JSON.stringify({
          user: action.payload.user,
          token: action.payload.token,
        })
      );
      return {
        ...state,
        loginLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case UserActionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload.error,
      };

    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        signUpError: null,
        signUpLoading: true,
      };
    case UserActionTypes.SIGN_UP_SUCCESS:
      Cookies.set(
        "AUTH",
        JSON.stringify({
          user: action.payload.user,
          token: action.payload.token,
        })
      );
      return {
        ...state,
        signUpLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case UserActionTypes.SIGN_UP_ERROR:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.payload.error,
      };

    case UserActionTypes.LOG_OUT:
      Cookies.remove("AUTH");
      return {
        ...state,
        user: null,
        token: null,
      };

      case UserActionTypes.USER_FETCH_START:
        return {
          ...state,
          fetchUserLoading: true,
          fetchUserError: null,
        };
      case UserActionTypes.USER_FETCH_SUCCESS:
        return {
          ...state,
          fetchUserLoading: false,
          book: {
            ...state.book,
            [action.payload.id]: action.payload.book,
          },
        };
      case UserActionTypes.USER_FETCH_ERROR:
        return {
          ...state,
          fetchUserLoading: false,
          fetchUserError: action.payload.error,
        };
    default:
      return state;
  }
};

export default reducer;
