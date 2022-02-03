interface ItemInterface {
  name: string;
  path: string;
  isModal?: boolean;
  SUB_MENU?: SubMenuArray[];
}

interface SubMenuArray {
  name: string;
  path: string;
  id: string;
}

interface MenuElementInterface {
  item: ItemInterface;
  root?: boolean;
  cartAmount?: string;
}

export default MenuElementInterface;
