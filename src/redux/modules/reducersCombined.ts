import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import AuthState from "./auth/types";
import profileReducer from "./userProfile/reducer";
import ProfileStateInterface from "./userProfile/types";

export interface StoreInterface {
  auth: AuthState;
  profile: ProfileStateInterface;
}

export default combineReducers<StoreInterface>({
  auth: authReducer,
  profile: profileReducer,
});
