import axios from "axios";
import MOCK_API_URL from "@/constants/mockapiURL";

const deleteMockapiData = (ID: number | string, endpoint: string) => axios.delete(`${MOCK_API_URL}/${endpoint}/${ID}`);

export default deleteMockapiData;
