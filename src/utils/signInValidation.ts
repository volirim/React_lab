import { SetStateAction } from "react";
import getGamesData from "@/api/mockapiData";
import { UserServerInterface, UserLoginInterface } from "@/types/UserData";

export const loginValidation = (data: UserLoginInterface, response: UserServerInterface[]) => {
  const filteredData = response.filter(
    (element: UserServerInterface) =>
      element.login === data.login.toLowerCase() && element.password === data.password.toLowerCase()
  );
  if (filteredData.length) {
    return true;
  }
  alert("Введите корректные данные");
  return false;
};

const onSubmitLogin = async (
  data: UserLoginInterface,
  updateUserStatus: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
  const response = await getGamesData("/user");
  updateUserStatus(loginValidation(data, response));
  // eslint-disable-next-line no-restricted-globals
  history.back();
};

export default onSubmitLogin;
