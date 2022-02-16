import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlatformMenu from "@/components/UI/PlatformMenu/PlatformMenu";
import deleteGameCard from "@/utils/cart/deleteGameCard";
import Amount from "../Amount/Amount";
import styles from "./CartItem.module.scss";
import getGamesData from "@/api/getMockapiData";
import beautifyPrice from "@/utils/cart/priceBeautifier";
import { cartCurrentGameSelector } from "@/store/modules/cart/selectors";
import { StoreInterface } from "@/store/modules/reducersCombined";

interface CartItemInterface {
  name: string;
}

const CartItem = React.memo(({ name }: CartItemInterface) => {
  const store = useSelector((state: StoreInterface) => state);
  const currentGame = cartCurrentGameSelector(store)(name);
  const [serverPrice, setServerPrice] = useState("0");

  useEffect(() => {
    (async function getPrice() {
      const game = await getGamesData(`/games?name=${name}`);
      setServerPrice(game[0].price);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.item}>{name}</div>
        <div className={styles.item}>
          <PlatformMenu name={name} />
        </div>
        <div className={styles.item}>{currentGame.orderDate}</div>
        <div className={styles.item}>
          <Amount name={name} />
        </div>
        <div className={styles.item}>{beautifyPrice(parseFloat(serverPrice) * parseInt(currentGame.amount, 10))}</div>
        <button className="button" type="button" onClick={() => deleteGameCard(name)}>
          Remove
        </button>
      </div>
      <div className={styles.line} />
    </div>
  );
});

export default CartItem;
