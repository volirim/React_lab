import CartItemType from "@/types/cartItemType";

const calculateItemsAmount = (array: CartItemType[], increase: boolean, name: string) => {
  const mappedGames = array.map((cartItem) => {
    const newCartItem = { ...cartItem };
    if (newCartItem.name === name && parseInt(newCartItem.amount, 10) > 1) {
      newCartItem.amount = increase
        ? (parseInt(newCartItem.amount, 10) + 1).toString()
        : (parseInt(newCartItem.amount, 10) - 1).toString();
      return newCartItem;
    }
    if (newCartItem.name === name) {
      newCartItem.amount = increase ? (parseInt(newCartItem.amount, 10) + 1).toString() : "1";
      return newCartItem;
    }
    return newCartItem;
  });
  return mappedGames;
};

export default calculateItemsAmount;
