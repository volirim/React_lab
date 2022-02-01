import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NavMenu from "./components/Menu";
import styles from "./Header.module.scss";
import { getMenu } from "../../constants/menus";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import MenuElement from "./components/MenuItem";
import { cart, exit } from "@/constants/routesCartExit";

const Header = function () {
  const authorised = useSelector((state: StoreInterface) => state.auth.authorised);

  return (
    <header className={styles.container}>
      <NavLink to="/" className={styles.title}>
        Game Store
      </NavLink>
      <NavMenu menu={getMenu(authorised)} exit={<MenuElement item={exit} />} cart={<MenuElement item={cart} />} />
    </header>
  );
};

export default Header;
