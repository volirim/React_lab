import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./Menu.module.scss";
import NavMenu from "./Menu";
import MenuElementInterface from "@/types/menuElementInterface";

const MenuElement = React.memo(({ item, params = "" }: MenuElementInterface) => {
  const classesList = [classes.item].join(" ");

  return (
    <li className={classesList}>
      <NavLink to={item.path} key={item.id} className={classes.link}>
        {`${item.name} ${params}`}
      </NavLink>
      {item.SUB_MENU && <NavMenu menu={item.SUB_MENU} root={false} />}
    </li>
  );
});

export default MenuElement;
