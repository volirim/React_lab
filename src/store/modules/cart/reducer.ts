import CartItemType from "@/types/cartItemType";
import changeCategories from "@/utils/redux/changeCategories";
import cartActions from "./actions";
import CartState from "./types";

interface CartAction {
  type: string;
  payload: CartItemType;
}

const defaultState = {
  cart: [],
};

export default function cartReducer(
  state: CartState = defaultState,
  action: CartAction = {
    type: "",
    payload: {
      id: "",
      name: "",
      categories: { pc: "", playstation: "", xbox: "" },
      orderDate: "",
      amount: "",
      price: "",
      activePlatform: "",
    },
  }
) {
  if (!action) return state;

  switch (action.type) {
    case cartActions.DELETE_CART_ACTION:
      return { cart: [] };
    case cartActions.SET_CART_ACTION:
      return { ...state, cart: !state.cart ? [action.payload] : state.cart.concat(action.payload) };
    case cartActions.CHANGE_CART_ACTION:
      return { ...state, cart: !state.cart ? [action.payload] : state.cart.concat(action.payload) };
    case cartActions.CHANGE_PLATFORM_ACTION:
      return {
        cart: changeCategories(state, action),
      };
    default:
      return state;
  }
}
