import getGamesData from "@/api/getMockapiData";
import { checkSetCartAction } from "@/store/modules/cart/actionCreate";
import store from "@/store/store";

async function changeAmount(id: string, top: boolean) {
  const cartData = await getGamesData("/cart");
  const game = await getGamesData(`/cart?id=${id}`);

  const price = top
    ? ((+game[0].price / +game[0].amount) * (+game[0].amount + 1)).toString()
    : ((+game[0].price / +game[0].amount) * (+game[0].amount - 1)).toString();

  store.dispatch(checkSetCartAction(cartData));
  return price;
}

export default changeAmount;
