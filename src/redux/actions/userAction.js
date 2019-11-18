import * as Types from "../types";
import Axios from "axios";
import jwt from "jwt-decode";

export const register = user => dispatch => {
  dispatch({ type: Types.LOADING_UI });
  Axios.post("http://localhost:4000/signup", user)
    .then(res => {
      dispatch({
        type: Types.SET_ERRORS,
        payload: {
          errors: {}
        }
      });
    })
    .catch(err => {
      dispatch({
        type: Types.SET_ERRORS,
        payload: err.response.data.errors
      });
    });
};

export const userlogout = () => dispatch => {
  localStorage.removeItem("token");
  localStorage.removeItem("user_auth");
  delete Axios.defaults.headers.common["Authorization"];
  dispatch({ type: Types.SET_UNAUTHENTICATED });
};

export const userlogin = (user, history) => dispatch => {
  dispatch({ type: Types.LOADING_UI });
  Axios.post("http://localhost:4000/signin", user)
    .then(res => {
      let token = res.data.token;
      localStorage.setItem("token", token);
      setAuthorizationHeader(token);
      let decode = jwt(token);

      dispatch({
        type: Types.SET_USER,
        payload: {
          user: decode
        }
      });

      dispatch({ type: Types.CLEAR_ERROR });
      history.push("/");
    })
    .catch(err => {
      dispatch({
        type: Types.SET_ERRORS,
        payload: err.response.data.errors
      });
    });
};

const setAuthorizationHeader = token => {
  const FBIdToken = `Bearer ${token}`;
  let decode = jwt(token);
  localStorage.setItem("user_auth", JSON.stringify(decode.user));
  //var storedNames = JSON.parse(localStorage.getItem("user_auth"));
  Axios.defaults.headers.common["Authorization"] = FBIdToken;
};
