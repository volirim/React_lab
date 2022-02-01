import MOCK_API_URL from "@/constants/mockapiURL";

const changeCartData = (path: string, id: string, balance: string) =>
  fetch(`${MOCK_API_URL}${path}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      balance: `${balance}`,
    }),
  });

export default changeCartData;
