import changeMockapiData from "@/api/changeMockapiData";
import changeMockapiPassword from "../changeMockapiPassword";

interface DataInterface {
  password: string;
  passwordConfirm: string;
}

async function passwordChangeValidation(data: DataInterface) {
  if (data.password === data.passwordConfirm && /^[a-z0-9]{3,16}$/.test(data.password.toLowerCase())) {
    alert("Смена данных произошла успешно");
    return changeMockapiData(await changeMockapiPassword(data));
  }
  return alert("Введите другой пароль");
}

export default passwordChangeValidation;
