import { NavLink } from "react-router-dom";
import classes from "../menu.module.scss";
import NavMenu from "../menu";
import MenuElementInterface from "@/types/MenuElementInterface";

const MenuElement = function ({ item }: MenuElementInterface) {
  const classesList = [classes.item].join(" ");

  return (
    <li className={classesList}>
      <NavLink to={item.path} className={classes.link}>
        {item.name}
      </NavLink>
      {item.sub && <NavMenu menu={item.sub} root={false} />}
    </li>
  );
};

export default MenuElement;