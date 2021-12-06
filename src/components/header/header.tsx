import { NavLink } from "react-router-dom";
import NavMenu from "./modules/navMenu/menu";
import header from "./header.module.scss";
import { HEADER_MENU } from "../../constants/menus";

const Header: React.FC = function () {
  return (
    <header className={header.container}>
      <NavLink to="/" className={header.title}>
        Game Store
      </NavLink>
      <NavMenu menu={HEADER_MENU} />
    </header>
  );
};

export default Header;
