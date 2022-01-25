import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import AuthState from "./auth/types";
import filterReducer from "./filters/reducer";
import FilterStateInterface from "./filters/types";
import searchReducer from "./search/reducer";
import SearchStateInterface from "./search/types";
import profileReducer from "./userProfile/reducer";
import ProfileStateInterface from "./userProfile/types";

export interface StoreInterface {
  auth: AuthState;
  profile: ProfileStateInterface;
  filters: FilterStateInterface;
  search: SearchStateInterface;
}

export default combineReducers<StoreInterface>({
  auth: authReducer,
  profile: profileReducer,
  filters: filterReducer,
  search: searchReducer,
});
