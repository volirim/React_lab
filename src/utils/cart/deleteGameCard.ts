import { checkChangeCartAction, checkClearCartAction } from "@/redux/modules/cart/actionCreate";
import store from "@/redux/store";

function deleteGameCard(name: string) {
  const gamesList = store.getState().cart.cart;
  const filteredList = gamesList.filter((element) => element.name !== name);

  store.dispatch(checkClearCartAction());
  store.dispatch(checkChangeCartAction(filteredList));
}

export default deleteGameCard;
