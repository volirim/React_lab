import { createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// eslint-disable-next-line import/no-cycle
import reducer from "./modules/reducersCombined";

export interface DefaultStateInterface {
  authorised: boolean;
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
console.log(createStore(persistedReducer));

export const persistor = persistStore(store);

export default store;
