import axios from "axios";
import MOCK_API_URL, { ENDPOINTS } from "@/constants/mockapiURL";

const deleteMockapiData = (userID: number) => axios.delete(`${MOCK_API_URL}/${ENDPOINTS.user}/${userID}`);

export default deleteMockapiData;
