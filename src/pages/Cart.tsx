import { useSelector } from "react-redux";
import Line from "@/components/Line/Line";
import CartBalance from "@/components/pages/cart/CartBalance/CartBalance";
import CartItem from "@/components/pages/cart/CartItem/CartItem";
import styles from "./Cart.module.scss";
import CartItemType from "@/types/cartItemType";
import { StoreInterface } from "@/redux/modules/reducersCombined";

const Cart = function () {
  const gamesList = useSelector((state: StoreInterface) => state.cart.cart);

  return (
    <div className="main-container">
      <div className={styles.topBlock}>
        <div className={styles.title}>Cart page</div>
        <Line styleList="lineCart" />
      </div>
      <div className={styles.bottomBlock}>
        <div className={styles.titlesBlock}>
          <div className={styles.title}>Name</div>
          <div className={styles.title}>Platform</div>
          <div className={styles.title}>Order date</div>
          <div className={styles.title}>Amount</div>
          <div className={styles.title}>Price ($)</div>
        </div>
        <Line styleList="lineCart" />
        <div className={styles.middleBlock}>
          {gamesList.map((element: CartItemType) => (
            <CartItem name={element.name} />
          ))}
        </div>
        <CartBalance />
      </div>
    </div>
  );
};

export default Cart;
