import { createStore } from "@reduxjs/toolkit";

export interface DefaultStateInterface {
  authorised: boolean;
}

const defaultState = {
  authorised: JSON.parse(localStorage.getItem("authorised")!),
};

// eslint-disable-next-line default-param-last
const reducer = (state: DefaultStateInterface = defaultState, action: { type: string; payload: boolean }) => {
  switch (action.type) {
    case "CHECK":
      return { ...state, authorised: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
