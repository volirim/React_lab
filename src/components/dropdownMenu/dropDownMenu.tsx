import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import MenuElement from "../header/modules/navMenu/menuElement/menuElement";
import subMenu from "./dropDown.module.scss";
import nav from "../header/modules/navMenu/menu.module.scss";
import DropDownMenuInterface from "@/types/dropdownMenuInterface";
import RouteData from "@/types/routeData";

const DropDownMenu = function ({ component }: DropDownMenuInterface) {
  const [hover, setHover] = useState(false);
  return (
    <NavLink
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      to={component.path}
      className={
        useLocation().pathname === component.path
          ? `${nav.item} ${nav.active} ${subMenu.container}`
          : `${nav.item} ${subMenu.container}`
      }
    >
      <div>{component.name}</div>
      <ul className={hover ? `${subMenu.menu}` : `${subMenu.menu} ${subMenu.unhover}`}>
        {component.options.map((componentInner: RouteData) => (
          <MenuElement component={componentInner} />
        ))}
      </ul>
    </NavLink>
  );
};

export default DropDownMenu;
