import changeMockapiData from "@/api/changeMockapiData";
import getGamesData from "@/api/getMockapiData";
import { UserServerInterface } from "@/types/userData";
import changeMockapiLogin from "../changeMockapiLogin";

interface DataInterface {
  login: string;
  description: string;
}

async function loginChangeValidation(data: DataInterface, id: number) {
  const serverData = await getGamesData("/user");

  const filteredData = await serverData.filter((element: UserServerInterface) => element.login === data.login);
  const sameUserLogin = await serverData.find((element: UserServerInterface) => element.id === id);

  if (
    (!filteredData.length || sameUserLogin.login === data.login) &&
    /^[a-z0-9_-]{3,16}$/.test(data.login.toLowerCase())
  ) {
    alert("Смена данных произошла успешно");
    return changeMockapiData(await changeMockapiLogin(data));
  }
  return alert("Введите другие данные");
}

export default loginChangeValidation;
