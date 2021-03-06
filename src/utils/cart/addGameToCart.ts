import uniqID from "uniqid";
import getGamesData from "@/api/getMockapiData";
import { checkChangeCartAction, checkClearCartAction, checkSetCartAction } from "@/store/modules/cart/actionCreate";
import store from "@/store/store";
import CartItemType from "@/types/cartItemType";

interface CategoriesInterface {
  pc?: string;
  playstation?: string;
  xbox?: string;
}

async function addGameToCart(name: string, categories: CategoriesInterface) {
  const date = new Date();
  const cartData = store.getState().cart.cart;
  const serverData = await getGamesData(`/games?name=${name}`);

  const repeatingGame = cartData.filter((element: CartItemType) => element.name === name);

  const orderDateString = `${date.getUTCDate().toString()}/${(date.getUTCMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getUTCFullYear().toString()}`;

  const data = {
    name,
    categories,
    orderDate: orderDateString,
    amount: repeatingGame.length ? (+repeatingGame[0].amount + 1).toString() : "1",
    price: serverData[0].price,
    activePlatform: Object.keys(categories)[0],
    id: uniqID(),
  };

  if (!repeatingGame.length) {
    store.dispatch(checkSetCartAction(data));
  }
  const filteredArray = cartData.filter((element) => element.name !== data.name);
  store.dispatch(checkClearCartAction());
  store.dispatch(checkChangeCartAction(filteredArray.concat(data)));
}

export default addGameToCart;
