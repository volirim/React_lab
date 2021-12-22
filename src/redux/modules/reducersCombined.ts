import { combineReducers } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import isAuthorised from "./auth/reducer";

export interface ReducersInterface {
  isAuthorised: {
    authorised: boolean;
  };
}

export default combineReducers<ReducersInterface>({ isAuthorised });
