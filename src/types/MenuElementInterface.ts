interface ItemInterface {
  name: string;
  path: string;
  SUB_MENU?: SubMenuArray[];
}

interface SubMenuArray {
  name: string;
  path: string;
}

interface MenuElementInterface {
  item: ItemInterface;
  root?: boolean;
}

export default MenuElementInterface;
