import { createSelector } from "@reduxjs/toolkit";
import { StoreInterface } from "../reducersCombined";

const cartSelector = (state: StoreInterface) => state.cart.cart;

const selectAmount = createSelector(cartSelector, (cartItems) => {
  const amountArray = cartItems.map((element) => parseInt(element.amount, 10));
  if (amountArray.length) {
    return amountArray.reduce((sum, el) => sum + el);
  }
  return "";
});

const activePlatformSelector = createSelector(
  cartSelector,
  (cartItems) => (name: string) => Object.keys(cartItems.find((cartItem) => cartItem.name === name)!.categories)[0]
);

const cartCurrentGameSelector = createSelector(
  cartSelector,
  (cartItems) => (name: string) => cartItems.find((element) => element.name === name)!
);

export { selectAmount, activePlatformSelector, cartSelector, cartCurrentGameSelector };
