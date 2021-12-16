import getGamesData from "@/api/getMockapiData";
import sendUserData from "@/api/postMockapiData";
import { UserLoginInterface, UserRegisterInterface, UserServerInterface } from "@/types/userData";
import setStorageData from "./setStorageData";
import validateRegisterData from "./validators/registerValidation";

const onSubmitRegister = async (data: UserRegisterInterface) => {
  const response: UserServerInterface[] = await getGamesData("/user");

  if (validateRegisterData(data, response)) {
    setStorageData(true);
    const newUser: UserLoginInterface = {
      login: data.login.toLowerCase(),
      password: data.password.toLowerCase(),
    };
    sendUserData(newUser);
    return true;
  }
  return false;
};

export default onSubmitRegister;
