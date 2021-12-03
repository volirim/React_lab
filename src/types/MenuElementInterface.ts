import HEADER_MENU from "@/constants/menus";

interface ItemInterface {
  name: string;
  path: string;
  sub?: typeof HEADER_MENU;
}

interface MenuElementInterface {
  item: ItemInterface;
  root?: boolean;
}

export default MenuElementInterface;
