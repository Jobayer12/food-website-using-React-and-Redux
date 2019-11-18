import * as Types from "../types";
const initialState = {
    loading: false,
    errors: null
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case Types.SET_ERRORS:
        return {
          ...state,
          loading: false,
          errors: action.payload
        };
      case Types.CLEAR_ERROR:
        return {
          ...state,
          loading: false,
          errors: null
        };
        case Types.LOADING_UI:
          return {
            ...state,
            loading: true
          };
      
      default:
        return state;
    }
  }