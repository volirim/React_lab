import { NavLink } from "react-router-dom";
import NavMenu from "./components/Menu";
import styles from "./Header.module.scss";
import { getMenu } from "../../constants/menus";
import { UserStatusInterface } from "@/types/userStatusInterface";

const Header = function ({ userStatus }: UserStatusInterface) {
  return (
    <header className={styles.container}>
      <NavLink to="/" className={styles.title}>
        Game Store
      </NavLink>
      <NavMenu menu={getMenu(userStatus)} />
    </header>
  );
};

export default Header;
