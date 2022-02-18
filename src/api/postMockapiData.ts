import axios from "axios";
import MOCK_API_URL, { ENDPOINTS } from "@/constants/mockapiURL";
import { UserLoginInterface } from "@/types/userData";

const createUser = (user: UserLoginInterface): Promise<unknown> => {
  if (user) {
    return axios.post(`${MOCK_API_URL}/${ENDPOINTS.user}`, {
      ...user,
    });
  }
  return Promise.reject(new Error("User not found"));
};

export default createUser;
