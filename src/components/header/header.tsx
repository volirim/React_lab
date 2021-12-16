import { NavLink } from "react-router-dom";
import NavMenu from "./modules/navMenu/Menu";
import header from "./header.module.scss";
import { getMenu } from "../../constants/menus";
import { UserStatusInterface } from "@/types/userStatusInterface";

const Header = function ({ userStatus }: UserStatusInterface) {
  return (
    <header className={header.container}>
      <NavLink to="/" className={header.title}>
        Game Store
      </NavLink>
      <NavMenu menu={getMenu(userStatus)} />
    </header>
  );
};

export default Header;
