import { SetStateAction } from "react";
import getGamesData from "@/api/mockapiData";
import sendUserData from "@/api/postMockapiData";
import { UserLoginInterface, UserRegisterInterface, UserServerInterface } from "@/types/UserData";

const validateRegisterData = (
  data: UserRegisterInterface,
  response: UserServerInterface[]
): void | UserLoginInterface => {
  const filteredData = response.filter((element: UserServerInterface) => element.login === data.login);
  if (
    !filteredData.length &&
    /^[a-z0-9_-]{3,16}$/.test(data.login.toLowerCase()) &&
    /^[a-z0-9]{3,16}$/.test(data.password.toLowerCase()) &&
    data.password === data.passwordConfirm
  ) {
    const newUser: UserLoginInterface = {
      login: data.login.toLowerCase(),
      password: data.password.toLowerCase(),
    };

    return newUser;
  }
  alert("Введите другие данные");
};

const onSubmitRegister = async (
  data: UserRegisterInterface,
  updateUserStatus: {
    (value: SetStateAction<boolean>): void;
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  const response: UserServerInterface[] = await getGamesData("user");

  await sendUserData(validateRegisterData(data, response));
  if (validateRegisterData(data, response)) {
    updateUserStatus(true);
    return true;
  }
};

export default onSubmitRegister;
