import { UserLoginInterface } from "./userData";

interface CartUser extends Omit<UserLoginInterface, "password"> {
  balance: string;
}

export default CartUser;
