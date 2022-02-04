import axios from "axios";
import MOCK_API_URL, { ENDPOINTS } from "@/constants/mockapiURL";
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
  return axios.post(`${MOCK_API_URL}/${ENDPOINTS.user}`, {
    ...data,
  });
}

export default changeMockapiData;
