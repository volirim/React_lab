import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Menu.module.scss";
import NavMenu from "./Menu";
import MenuElementInterface from "@/types/menuElementInterface";
import { StoreInterface } from "@/redux/modules/reducersCombined";

const MenuElement = function ({ item }: MenuElementInterface) {
  const classesList = [classes.item].join(" ");
  const [url, setUrl] = useState("");

  const amount = useSelector((state: StoreInterface) => {
    const amountArray = state.cart.cart.map((element) => parseInt(element.amount, 10));
    if (amountArray.length) {
      return amountArray.reduce((sum, el) => sum + el);
    }
    return "0";
  });

  console.log(amount);

  window.onhashchange = () => setUrl(window.location.pathname);

  return (
    <li className={classesList}>
      <NavLink to={item.isModal ? `${url}${item.path}` : item.path} className={classes.link}>
        {item.name === "Cart" ? `${item.name} ${amount}` : item.name}
      </NavLink>
      {item.SUB_MENU && <NavMenu menu={item.SUB_MENU} root={false} />}
    </li>
  );
};

export default MenuElement;
