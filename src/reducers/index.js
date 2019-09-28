import { combineReducers } from "redux";
import auth from "./auth";
import news from "./news";

const appReducers = combineReducers({
  auth,
  news
});

export default appReducers;
