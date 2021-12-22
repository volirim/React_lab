import getGamesData from "@/api/getMockapiData";
import createUser from "@/api/postMockapiData";
import { UserLoginInterface, UserRegisterInterface, UserServerInterface } from "@/types/userData";
import validateRegisterData from "./validators/registerValidation";

const onSubmitRegister = async (data: UserRegisterInterface) => {
  const response: UserServerInterface[] = await getGamesData("/user");

  if (validateRegisterData(data, response)) {
    const newUser: UserLoginInterface = {
      login: data.login.toLowerCase(),
      password: data.password.toLowerCase(),
    };
    createUser(newUser);
    return true;
  }
  return false;
};

export default onSubmitRegister;
