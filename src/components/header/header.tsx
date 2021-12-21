import { NavLink } from "react-router-dom";
import { useContext } from "react";
import NavMenu from "./components/Menu";
import styles from "./Header.module.scss";
import { getMenu } from "../../constants/menus";
import UserStatusContext from "@/context/userStatusContext";

const Header = function () {
  const { userStatus } = useContext(UserStatusContext);

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
