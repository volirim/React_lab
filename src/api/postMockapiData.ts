import MOCK_API_URL from "@/constants/URL";
import { UserLoginInterface } from "@/types/UserData";

const sendUserData = (user: void | UserLoginInterface) => {
  if (user) {
    // alert("Пользователь создан");
    fetch(`${MOCK_API_URL}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(user),
    });
  }
};

export default sendUserData;
