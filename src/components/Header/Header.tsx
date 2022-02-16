import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import NavMenu from "./components/Menu";
import styles from "./Header.module.scss";
import { getMenu } from "../../constants/menus";
import MenuElement from "./components/MenuElement";
import { cart, exit } from "@/constants/routesCartExit";
import selectAuth from "@/store/modules/auth/selectors";
import { selectAmount } from "@/store/modules/cart/selectors";

const Header = function () {
  const authorised = useSelector(selectAuth);
  const cartAmount = useSelector(selectAmount);

  const menu = useMemo(() => getMenu(authorised), [authorised]);

  return (
    <header className={styles.container}>
      <NavLink to="/" className={styles.title}>
        Game Store
      </NavLink>
      <NavMenu menu={menu} />
      {authorised ? (
        <div className={styles.secondMenu}>
          <MenuElement item={cart} key={cart.id} params={` ${cartAmount}`} />
          <MenuElement item={exit} key={exit.id} />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
