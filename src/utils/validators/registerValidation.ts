import validateData from "@/constants/validationConstants";
import { UserRegisterInterface, UserServerInterface } from "@/types/userData";

const validateRegisterData = (data: UserRegisterInterface, response: UserServerInterface[]): boolean => {
  const filteredData = response.filter((element: UserServerInterface) => element.login === data.login);
  const validationObject = validateData(filteredData, data);
  console.log(filteredData);

  if (
    validationObject.isSignedUp &&
    validationObject.loginCheck &&
    validationObject.passwordCheck &&
    validationObject.confirmPasswordCheck
  ) {
    return true;
  }
  alert("Введите другие данные");
  return false;
};

export default validateRegisterData;
