import checkProfileAction from "@/redux/modules/userProfile/actionCreate";
import store from "@/redux/store";
import { UserLoginInterface, UserServerInterface } from "@/types/userData";

const loginValidation = (data: UserLoginInterface, response: UserServerInterface[]) => {
  const filteredData = response.filter(
    (element: UserServerInterface) =>
      element.login === data.login.toLowerCase() && element.password === data.password.toLowerCase()
  );
  if (filteredData.length) {
    store.dispatch(checkProfileAction(filteredData[0]));
    return true;
  }
  alert("Введите корректные данные");
  return false;
};

export default loginValidation;
