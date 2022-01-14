import MOCK_API_URL from "@/constants/mockapiURL";
import { UserLoginInterface } from "@/types/userData";

const createUser = (user: UserLoginInterface): Promise<unknown> => {
  if (user) {
    return fetch(`${MOCK_API_URL}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(user),
    });
  }
  return Promise.reject(new Error("User not found"));
};

export default createUser;
