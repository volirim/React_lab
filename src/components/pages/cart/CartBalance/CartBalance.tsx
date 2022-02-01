import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getGamesData from "@/api/getMockapiData";
import styles from "./CartBalance.module.scss";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import getFullPrice from "@/utils/cart/getFullPrice";
import changeCartData from "@/api/changeCartData";
import { checkClearCartAction } from "@/redux/modules/cart/actionCreate";
import beautifyPrice from "@/utils/cart/priceBeautifier";

const CartBalance = function () {
  const dispatch = useDispatch();
  const cart = useSelector((state: StoreInterface) => state.cart.cart);
  const userName = useSelector((state: StoreInterface) => state.profile.login);

  const [userData, setUserData] = useState({ id: "0", name: "none", balance: "0" });
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async function getServerBalance() {
      const user = await getGamesData(`/cart?name=${userName}`);
      setUserData(user[0]);
      setBalance(beautifyPrice(parseFloat(user[0].balance)));
    }
    getServerBalance();
  }, []);

  const onClickHandler = () => {
    if (parseFloat(balance) - parseFloat(getFullPrice(cart)) > 0) {
      changeCartData("/cart", userData.id, (parseFloat(balance) - parseFloat(getFullPrice(cart))).toString());
      dispatch(checkClearCartAction());
      setBalance(beautifyPrice(parseFloat(balance) - parseFloat(getFullPrice(cart))).toString());
    } else alert("Много набрал, другалек");
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
