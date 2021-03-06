import React from "react";
import MenuInterface from "@/types/menuInterface";
import classes from "./Menu.module.scss";
import MenuElement from "./MenuElement";

const NavMenu = React.memo(({ menu, root = true }: MenuInterface) => {
  const classesList = [classes.menu, root ? classes.menuRoot : classes.menuSub].join(" ");

  return (
    <ul className={classesList}>
      {menu.map((item) => (
        <MenuElement key={item.id} item={item} />
      ))}
    </ul>
  );
});

export default NavMenu;
