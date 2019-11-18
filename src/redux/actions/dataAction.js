import * as Types from "../types";
import Axios from "axios";

export const getAllProduct = url => dispatch => {
  dispatch({ type: Types.LOADING_DATA });
  Axios.get(`http://localhost:4000${url}`)
    .then(res => {
      dispatch({
        type: Types.SET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: Types.SET_PRODUCTS,
        payload: []
      });
    });
};

export const getFirstPage = () => dispatch => {
  dispatch({ type: Types.LOADING_DATA });
  Axios.get(`http://localhost:4000/`)
    .then(res => {
      let value = {
        allcategories: res.data.allcategories[0],
        popular: res.data.popular[0],
        newProduct: res.data.newProduct[0]
      };
      dispatch({
        type: Types.SET_FIRST_PAGE,
        payload: value
      });
    })
    .catch(err => {
      dispatch({
        type: Types.SET_PRODUCTS,
        payload: []
      });
    });
};
