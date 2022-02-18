import CartItemType, { CategoriesInterface } from "@/types/cartItemType";
import cartActions from "./actions";

const checkClearCartAction = () => ({
  type: cartActions.DELETE_CART_ACTION,
  payload: [],
});

const checkSetCartAction = (actionPayload: CartItemType) => ({
  type: cartActions.SET_CART_ACTION,
  payload: actionPayload,
});

const checkChangeCartAction = (actionPayload: CartItemType[]) => ({
  type: cartActions.SET_CART_ACTION,
  payload: actionPayload,
});

interface ChangePlatformInterface {
  name: string;
  categories: CategoriesInterface;
}
const checkChangePlatformAction = (actionPayload: ChangePlatformInterface) => ({
  type: cartActions.CHANGE_PLATFORM_ACTION,
  payload: actionPayload,
});

export { checkClearCartAction, checkSetCartAction, checkChangeCartAction, checkChangePlatformAction };
