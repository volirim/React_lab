import { useDispatch, useSelector } from "react-redux";
import React from "react";
import styles from "./Amount.module.scss";
import { checkChangeCartAction, checkClearCartAction } from "@/store/modules/cart/actionCreate";
import calculateItemsAmount from "@/utils/cart/calculateItemsAmount";
import { cartCurrentGameSelector, cartSelector } from "@/store/modules/cart/selectors";
import { StoreInterface } from "@/store/modules/reducersCombined";

interface AmountInterface {
  name: string;
}

const Amount = React.memo(({ name }: AmountInterface) => {
  const dispatch = useDispatch();
  const store = useSelector((state: StoreInterface) => state);
  const games = useSelector(cartSelector);
  const currentGame = cartCurrentGameSelector(store)(name);

  const onClickHandler = (increase: boolean) => {
    dispatch(checkClearCartAction());
    dispatch(checkChangeCartAction(calculateItemsAmount(games, increase, name)));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>{currentGame.amount}</div>
      <div className={styles.buttonsContainer}>
        <button type="button" className={styles.button} onClick={() => onClickHandler(true)}>
          &#9650;
        </button>
        <button type="button" className={styles.button} onClick={() => onClickHandler(false)}>
          &#9660;
        </button>
      </div>
    </div>
  );
});

export default Amount;
