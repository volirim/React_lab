import { UserRegisterInterface, UserServerInterface } from "@/types/userData";

function validateData(filteredData: UserServerInterface[], data: UserRegisterInterface) {
  return {
    isSignedUp: !filteredData.length,
    loginCheck: /^[a-z0-9_-]{3,16}$/.test(data.login.toLowerCase()),
    passwordCheck: /^[a-z0-9]{3,16}$/.test(data.password.toLowerCase()),
    confirmPasswordCheck: data.password === data.passwordConfirm,
  };
}

export default validateData;
