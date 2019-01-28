import postReducer from "./postReducer";
import authReducer from "./authReducer";
import { firestoreReducer } from "redux-firestore"; //database
import { firebaseReducer } from "react-redux-firebase"; //auth

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
