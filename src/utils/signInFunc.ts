import getGamesData from "@/api/getMockapiData";
import { UserLoginInterface } from "@/types/userData";
import loginValidation from "./validators/loginValidation";

const onSubmitLogin = async (data: UserLoginInterface) => {
  const response = await getGamesData("/user");
  return loginValidation(data, response);
};

export default onSubmitLogin;
