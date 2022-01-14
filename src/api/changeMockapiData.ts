import MOCK_API_URL from "@/constants/mockapiURL";
import deleteMockapiData from "./deleteMockapiData";

interface UserInterface {
  id: number;
  login: string;
  password: string;
  description?: string;
  source?: string;
}

async function changeMockapiData(data: UserInterface) {
  await deleteMockapiData(data.id);
  return fetch(`${MOCK_API_URL}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(data),
  });
}

export default changeMockapiData;
