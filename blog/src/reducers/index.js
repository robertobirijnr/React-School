import { combineReducers } from "redux";
import postReducer from "./postsRducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  posts: postReducer,
  users: usersReducer
});
