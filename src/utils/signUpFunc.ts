import uniqId from "uniqid";
import getGamesData from "@/api/getMockapiData";
import createUser from "@/api/postMockapiData";
import setGameCartData from "@/api/setGameCartData";
import checkProfileAction from "@/store/modules/userProfile/actionCreate";
import store from "@/store/store";
import CartUser from "@/types/cartUser";
import { UserLoginInterface, UserRegisterInterface, UserServerInterface } from "@/types/userData";
import validateRegisterData from "./validators/registerValidation";

const onSubmitRegister = async (data: UserRegisterInterface) => {
  const response: UserServerInterface[] = await getGamesData("/user");

  if (validateRegisterData(data, response)) {
    const id = uniqId();
    const newUser: UserLoginInterface = {
      id,
      login: data.login.toLowerCase(),
      password: data.password.toLowerCase(),
      isAdmin: false,
    };

    const newCart: CartUser = {
      id,
      login: data.login,
      balance: "4000",
      isAdmin: false,
    };

    await createUser(newUser);
    await setGameCartData(newCart);

    const getUser = (await getGamesData("/user")).filter(
      (element: UserServerInterface) => newUser.login === element.login
    );
    store.dispatch(checkProfileAction(getUser[0]));

    return true;
  }
  return false;
};

export default onSubmitRegister;
