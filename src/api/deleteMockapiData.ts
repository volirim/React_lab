import MOCK_API_URL from "@/constants/mockapiURL";

const deleteMockapiData = (userID: number) =>
  fetch(`${MOCK_API_URL}/user/${userID}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });

export default deleteMockapiData;
