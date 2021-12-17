import { NavLink } from "react-router-dom";
import { useState } from "react";
import classes from "../menu.module.scss";
import NavMenu from "../Menu";
import MenuElementInterface from "@/types/menuElementInterface";

const MenuElement = function ({ item }: MenuElementInterface) {
  const classesList = [classes.item].join(" ");
  const [url, setUrl] = useState("");
  window.onhashchange = () => setUrl(window.location.pathname);

  return (
    <li className={classesList}>
      <NavLink to={item.isModal ? `${url}${item.path}` : item.path} className={classes.link}>
        {item.name}
      </NavLink>
      {item.SUB_MENU && <NavMenu menu={item.SUB_MENU} root={false} />}
    </li>
  );
};

export default MenuElement;
