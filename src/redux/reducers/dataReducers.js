import * as Types from "../types";

const initialState = {
  products: [],
  firstPage: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case Types.LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case Types.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case Types.SET_FIRST_PAGE:
      return {
        ...state,
        firstPage: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
