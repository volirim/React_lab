import { HEADER_MENU } from "../constants/menus";

interface MenuInterface {
  menu: typeof HEADER_MENU;
  root?: boolean;
  cart?: JSX.Element;
  exit?: JSX.Element;
}

export default MenuInterface;
