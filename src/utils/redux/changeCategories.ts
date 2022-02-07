import CartState from "@/redux/modules/cart/types";
import CartItemType from "@/types/cartItemType";

interface CartAction {
  type: string;
  payload: CartItemType;
}

function changeCategories(state: CartState, action: CartAction): CartItemType[] {
  const newState = state.cart.map((element) => {
    const newCartItem = { ...element };
    if (element.name === action.payload.name) {
      newCartItem.categories = action.payload.categories;
      return newCartItem;
    }
    return newCartItem;
  });
  return newState;
}

export default changeCategories;
