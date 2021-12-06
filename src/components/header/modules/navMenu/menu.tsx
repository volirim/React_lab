import MenuInterface from "@/types/MenuInterface";
import "@szhsin/react-menu/dist/index.css";
import classes from "./menu.module.scss";
import MenuElement from "./menuElement/menuElement";

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
