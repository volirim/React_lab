import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";
import AuthState from "./auth/types";
import balanceReducer from "./balance/reducer";
import BalanceState from "./balance/types";
import cartReducer from "./cart/reducer";
import CartState from "./cart/types";
import filterReducer from "./filters/reducer";
import FilterStateInterface from "./filters/types";
import searchReducer from "./search/reducer";
import SearchStateInterface from "./search/types";
import profileReducer from "./userProfile/reducer";
import ProfileStateInterface from "./userProfile/types";
import gameCardEditor, { InitialStateInterface } from "./gameCardEditor/gameCardEditor";

export interface StoreInterface {
  auth: AuthState;
  profile: ProfileStateInterface;
  filters: FilterStateInterface;
  search: SearchStateInterface;
  cart: CartState;
  balance: BalanceState;
  activeGame: InitialStateInterface;
}

export default combineReducers<StoreInterface>({
  auth: authReducer,
  profile: profileReducer,
  filters: filterReducer,
  search: searchReducer,
  cart: cartReducer,
  balance: balanceReducer,
  activeGame: gameCardEditor,
});
