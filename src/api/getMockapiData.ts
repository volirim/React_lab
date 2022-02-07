import axios from "axios";
import MOCK_API_URL from "@/constants/mockapiURL";

const getGamesData = function (path: string) {
  return axios.get(`${MOCK_API_URL}${path}`).then((response) => response.data);
};

export default getGamesData;
