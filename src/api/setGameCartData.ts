import MOCK_API_URL from "@/constants/mockapiURL";
import CartUser from "@/types/cartUser";

const setGameCartData = (data: CartUser): Promise<unknown> =>
  fetch(`${MOCK_API_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(data),
  });

export default setGameCartData;
