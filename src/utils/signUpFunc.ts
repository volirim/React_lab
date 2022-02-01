import getGamesData from "@/api/getMockapiData";
import createUser from "@/api/postMockapiData";
import setGameCartData from "@/api/setGameCartData";
import checkProfileAction from "@/redux/modules/userProfile/actionCreate";
import store from "@/redux/store";
import CartUser from "@/types/cartUser";
import { UserLoginInterface, UserRegisterInterface, UserServerInterface } from "@/types/userData";
import validateRegisterData from "./validators/registerValidation";

const onSubmitRegister = async (data: UserRegisterInterface) => {
  const response: UserServerInterface[] = await getGamesData("/user");

  if (validateRegisterData(data, response)) {
    const newUser: UserLoginInterface = {
      login: data.login.toLowerCase(),
      password: data.password.toLowerCase(),
    };

    const newCart: CartUser = {
      name: data.login,
      balance: "4000",
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
