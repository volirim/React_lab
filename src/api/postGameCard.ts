import axios from "axios";
import MOCK_API_URL, { ENDPOINTS } from "@/constants/mockapiURL";
import GameCardType from "@/types/mockapi";

const postGameCard = (data: GameCardType) => {
  axios.post(`${MOCK_API_URL}/${ENDPOINTS.games}`, data);
};

export default postGameCard;
