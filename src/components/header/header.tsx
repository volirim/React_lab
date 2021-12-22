import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NavMenu from "./components/Menu";
import styles from "./Header.module.scss";
import { getMenu } from "../../constants/menus";
import { DefaultStateInterface } from "@/redux/authorisation";

const Header = function () {
  const authorised = useSelector((state: DefaultStateInterface) => state.authorised);

  return (
    <header className={styles.container}>
      <NavLink to="/" className={styles.title}>
        Game Store
      </NavLink>
      <NavMenu menu={getMenu(authorised)} />
    </header>
  );
};

export default Header;
