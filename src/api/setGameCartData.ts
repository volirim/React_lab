import axios from "axios";
import MOCK_API_URL, { ENDPOINTS } from "@/constants/mockapiURL";
import CartUser from "@/types/cartUser";

const setGameCartData = (data: CartUser): Promise<unknown> =>
  axios.post(`${MOCK_API_URL}/${ENDPOINTS.cart}`, {
    ...data,
  });

export default setGameCartData;
