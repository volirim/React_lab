import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGamesData from "@/api/getMockapiData";
import styles from "./CartBalance.module.scss";
import getFullPrice from "@/utils/cart/getFullPrice";
import changeCartData from "@/api/changeCartData";
import { checkClearCartAction } from "@/store/modules/cart/actionCreate";
import beautifyPrice from "@/utils/cart/priceBeautifier";
import { cartSelector } from "@/store/modules/cart/selectors";
import { userIdSelector } from "@/store/modules/userProfile/selectors";

const CartBalance = function () {
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  const userName = useSelector(userIdSelector);

  const [userData, setUserData] = useState({ id: "0", name: "none", balance: "0" });
  const [balance, setBalance] = useState("");

  useEffect(() => {
    (async function getServerBalance() {
      const user = await getGamesData(`/cart?id=${userName}`);
      setUserData(user[0]);
      setBalance(beautifyPrice(parseFloat(user[0].balance)));
    })();
  }, []);

  const onClickHandler = () => {
    if (parseFloat(balance) - parseFloat(getFullPrice(cart)) > 0) {
      changeCartData("/cart", userData.id, (parseFloat(balance) - parseFloat(getFullPrice(cart))).toString());
      dispatch(checkClearCartAction());
      setBalance(beautifyPrice(parseFloat(balance) - parseFloat(getFullPrice(cart))).toString());
    } else alert("You need to replenish the balance");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>Games cost: {getFullPrice(cart)}</div>
      <div className={styles.item}>Your balance: {balance}$</div>
      <button className="button" type="button" onClick={() => onClickHandler()}>
        Buy
      </button>
    </div>
  );
};

export default CartBalance;
