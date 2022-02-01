// eslint-disable-next-line import/no-extraneous-dependencies
import _ from "lodash";
import CartItemType from "@/types/cartItemType";
import beautifyPrice from "./priceBeautifier";

function getFullPrice(cartItemsArray: CartItemType[]) {
  const prices: number[] = [];
  cartItemsArray.map((item) => prices.push(parseInt(item.amount, 10) * parseFloat(item.price)));
  return beautifyPrice(_.sum(prices));
}

export default getFullPrice;
