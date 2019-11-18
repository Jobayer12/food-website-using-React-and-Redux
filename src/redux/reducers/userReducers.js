import * as Types from "../types";

const init = {
  isAuthenticated: false,
  user: {},
  loading: false,
  Auth: JSON.parse(localStorage.getItem("user_auth"))
};

const userReducers = (state = init, action) => {
  switch (action.type) {
    case Types.SET_USER: {
      return {
        user: action.payload.user,
        isAuthenticated: Object.keys(action.payload.user).length !== 0,
        loading: false,
        Auth: JSON.parse(localStorage.getItem("user_auth"))
      };
    }

    case Types.SET_UNAUTHENTICATED:
      return init;

    default:
      return state;
  }
};

export default userReducers;
