import axios from "axios";
import MOCK_API_URL from "@/constants/mockapiURL";

const changeCartData = (path: string, id: string, balance: string) =>
  axios.patch(`${MOCK_API_URL}${path}/${id}`, {
    balance: `${balance}`,
  });

export default changeCartData;
