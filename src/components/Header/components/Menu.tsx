import { useSelector } from "react-redux";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import MenuInterface from "@/types/menuInterface";
import classes from "./Menu.module.scss";
import MenuElement from "./MenuItem";

const NavMenu = function ({ menu, root = true, cart, exit }: MenuInterface) {
  const classesList = [classes.menu, root ? classes.menuRoot : classes.menuSub].join(" ");
  const authorised = useSelector((state: StoreInterface) => state.auth.authorised);
  return (
    <ul className={classesList}>
      {menu.map((item) => (
        <MenuElement item={item} />
      ))}
      {authorised ? (
        <>
          {cart}
          {exit}
        </>
      ) : null}
    </ul>
  );
};

export default NavMenu;
