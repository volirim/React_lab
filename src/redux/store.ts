import { AnyAction, createStore, Store } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer, { StoreInterface } from "./modules/reducersCombined";

export interface DefaultStateInterface {
  authorised: boolean;
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["search", "filters"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer) as unknown as Store<StoreInterface, AnyAction>;

export const persistor = persistStore(store as unknown as Store<StoreInterface, AnyAction>);

export default store;
