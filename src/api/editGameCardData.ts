import axios from "axios";
import GameCardType from "@/types/gameCardType";

const editGameCardData = (data: GameCardType, url: string) => {
  axios.patch(`${url}/${data.id}`, data);
};

export default editGameCardData;
