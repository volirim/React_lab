import axios from "axios";
import GameCardType from "@/types/mockapi";

const editGameCardData = (data: GameCardType, url: string) => {
  axios.patch(`${url}/${data.id}`, data);
};

export default editGameCardData;
