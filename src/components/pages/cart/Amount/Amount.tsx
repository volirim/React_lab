import { useDispatch, useSelector } from "react-redux";
import styles from "./Amount.module.scss";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import { checkChangeCartAction, checkClearCartAction } from "@/redux/modules/cart/actionCreate";

interface AmountInterface {
  name: string;
}

const Amount = function ({ name }: AmountInterface) {
  const dispatch = useDispatch();
  const games = useSelector((state: StoreInterface) => state.cart.cart);

  const currentGame = games.filter((element) => element.name === name)[0];

  const onClickHandler = (increase: boolean) => {
    games.map((element) => {
      if (element.name === name && parseInt(element.amount, 10) > 1) {
        // eslint-disable-next-line no-param-reassign
        element.amount = increase
          ? (parseInt(element.amount, 10) + 1).toString()
          : (parseInt(element.amount, 10) - 1).toString();
      } else if (element.name === name) {
        // eslint-disable-next-line no-param-reassign
        element.amount = increase ? (parseInt(element.amount, 10) + 1).toString() : "1";
      }
    });
    dispatch(checkClearCartAction());
    dispatch(checkChangeCartAction(games));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.count}>{currentGame.amount}</div>
      <div>
        <div className={styles.button} onClick={() => onClickHandler(true)}>
          &#9650;
        </div>
        <div className={styles.button} onClick={() => onClickHandler(false)}>
          &#9660;
        </div>
      </div>
    </div>
  );
};

export default Amount;
