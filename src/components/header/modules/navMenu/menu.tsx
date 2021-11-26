import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import routes from "@/utils/Routes";
import nav from "./menu.module.scss";

const Menu = function () {
  return (
    <nav className={nav.container}>
      <ul className={nav.menu}>
        {routes.map((component) => (
          <NavLink
            to={component.path}
            className={useLocation().pathname === component.path ? `${nav.item} ${nav.active}` : `${nav.item}`}
          >
            {component.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
