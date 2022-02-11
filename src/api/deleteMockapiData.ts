import axios from "axios";
import MOCK_API_URL from "@/constants/mockapiURL";

const deleteMockapiData = (id: number | string, endpoint: string) => axios.delete(`${MOCK_API_URL}/${endpoint}/${id}`);

export default deleteMockapiData;
