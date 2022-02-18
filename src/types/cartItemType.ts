export interface CategoriesInterface {
  pc?: string;
  playstation?: string;
  xbox?: string;
}

interface CartItemType {
  id?: string;
  name: string;
  categories: CategoriesInterface;
  orderDate: string;
  amount: string;
  price: string;
  activePlatform: string;
}

export default CartItemType;
