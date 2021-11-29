import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import routes from "@/utils/Routes";
import "@szhsin/react-menu/dist/index.css";
import dropdown from "../../../dropdownMenu/dropDown.module.scss";
import nav from "./menu.module.scss";

const NavMenu = function () {
  return (
    <nav className={nav.container}>
      <ul className={nav.menu}>
        {routes.map((component) => {
          if (component.name === "Products") {
            return (
              <Menu
                className={dropdown.dropdown}
                menuButton={<MenuButton className={dropdown.inner}>Products</MenuButton>}
              >
                <MenuItem className={dropdown.item}>
                  <NavLink to="products/pc" className={nav.item}>
                    PC
                  </NavLink>
                </MenuItem>
                <MenuItem className={dropdown.item}>
                  <NavLink to="products/playstation" className={nav.item}>
                    Playstation
                  </NavLink>
                </MenuItem>
                <MenuItem className={dropdown.item}>
                  <NavLink to="products/xbox" className={nav.item}>
                    XBOX
                  </NavLink>
                </MenuItem>
              </Menu>
            );
          }
          return (
            <NavLink
              to={component.path}
              className={useLocation().pathname === component.path ? `${nav.item} ${nav.active}` : `${nav.item}`}
            >
              {component.name}
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
