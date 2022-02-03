import { useDispatch, useSelector } from "react-redux";
import styles from "./Amount.module.scss";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import { checkChangeCartAction, checkClearCartAction } from "@/redux/modules/cart/actionCreate";
import calculateItemsAmount from "@/utils/cart/calculateItemsAmount";

interface AmountInterface {
  name: string;
}

const Amount = function ({ name }: AmountInterface) {
  const dispatch = useDispatch();
  const games = useSelector((state: StoreInterface) => state.cart.cart);

  const currentGame = games.filter((element) => element.name === name)[0];

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
};

export default Amount;
