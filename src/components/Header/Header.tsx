import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NavMenu from "./components/Menu";
import styles from "./Header.module.scss";
import { getMenu } from "../../constants/menus";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import MenuElement from "./components/MenuElement";
import { cart, exit } from "@/constants/routesCartExit";
import { selectAmount } from "@/redux/modules/cart/selectors";

const Header = function () {
  const authorised = useSelector((state: StoreInterface) => state.auth.authorised);
  const store = useSelector((state: StoreInterface) => state);

  return (
    <header className={styles.container}>
      <NavLink to="/" className={styles.title}>
        Game Store
      </NavLink>
      <NavMenu menu={getMenu(authorised)} />
      {authorised ? (
        <div className={styles.secondMenu}>
          <MenuElement item={cart} cartAmount={` ${selectAmount(store)}`} />
          <MenuElement item={exit} />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
