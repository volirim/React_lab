import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import nav from "../menu.module.scss";
import MenuElement from "@/types/MenuElement";

const MenuElement = function ({ component }: MenuElement) {
  return (
    <NavLink
      to={component.path}
      className={useLocation().pathname === component.path ? `${nav.item} ${nav.active}` : `${nav.item}`}
    >
      {component.name}
    </NavLink>
  );
};

export default MenuElement;
