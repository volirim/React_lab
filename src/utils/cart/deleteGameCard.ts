import { checkChangeCartAction, checkClearCartAction } from "@/store/modules/cart/actionCreate";
import store from "@/store/store";

function deleteGameCard(name: string) {
  const gamesList = store.getState().cart.cart;
  const filteredList = gamesList.filter((element) => element.name !== name);

  store.dispatch(checkClearCartAction());
  store.dispatch(checkChangeCartAction(filteredList));
}

export default deleteGameCard;
