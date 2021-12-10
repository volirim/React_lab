import { NavLink } from "react-router-dom";
import NavMenu from "./modules/navMenu/menu";
import header from "./header.module.scss";
import { HEADER_MENU, HEADER_MENU_AUTHORISED } from "../../constants/menus";
import { UserStatusInterface } from "@/types/UserStatusInterface";

const Header = function ({ userStatus }: UserStatusInterface) {
  return (
    <header className={header.container}>
      <NavLink to="/" className={header.title}>
        Game Store
      </NavLink>
      <NavMenu menu={userStatus ? HEADER_MENU_AUTHORISED : HEADER_MENU} />
    </header>
  );
};

export default Header;
