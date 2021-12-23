import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import AuthState from "./auth/types";

export interface StoreInterface {
  auth: AuthState;
}

export default combineReducers<StoreInterface>({
  auth: authReducer,
});
