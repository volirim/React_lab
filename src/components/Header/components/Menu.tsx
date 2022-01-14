import MenuInterface from "@/types/menuInterface";
import classes from "./Menu.module.scss";
import MenuElement from "./MenuItem";

const NavMenu = function ({ menu, root = true }: MenuInterface) {
  const classesList = [classes.menu, root ? classes.menuRoot : classes.menuSub].join(" ");
  return (
    <ul className={classesList}>
      {menu.map((item) => (
        <MenuElement item={item} />
      ))}
    </ul>
  );
};

export default NavMenu;
