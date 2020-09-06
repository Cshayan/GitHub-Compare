/* Root Reducer -> file to handle all reducers used */

import { combineReducers } from "redux";
import gitHubReducer from "./githubReducer";

export default combineReducers({
  gitHubReducer,
});
