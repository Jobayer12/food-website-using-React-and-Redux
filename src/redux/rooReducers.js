import { combineReducers } from "redux";
import userReducers from "./reducers/userReducers";
import uiReducers from "./reducers/uiReducers";
import dataReducers from "./reducers/dataReducers";

const rootreducers = combineReducers({
  user: userReducers,
  data: dataReducers,
  UI: uiReducers
});

export default rootreducers;
