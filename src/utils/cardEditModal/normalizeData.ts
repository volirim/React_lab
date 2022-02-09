import editGameCardData from "@/api/editGameCardData";
import getGamesData from "@/api/getMockapiData";
import postGameCard from "@/api/postGameCard";
import MOCK_API_URL, { ENDPOINTS } from "@/constants/mockapiURL";
import { setGameCard } from "@/redux/modules/gameCardEditor/gameCardEditor";
import store from "@/redux/store";
import FormInterface from "@/types/formInterface";
import GameCardType from "@/types/mockapi";

const normalizeData = async (data: FormInterface, id: string, urlAddress: string | undefined, typeOfEvent: string) => {
  const serverData: GameCardType =
    typeOfEvent === "setCard"
      ? { genres: { shooter: "true" }, categories: { pc: "true" } }
      : await getGamesData(`/${urlAddress ? ENDPOINTS.topGames : ENDPOINTS.games}/${id}`);

  const newData = {
    id,
    name: data.name,
    img: data.img,
    categories: data.categories
      ? Object.keys(data.categories).reduce((previous, category) => ({ ...previous, [category]: "true" }), {})
      : serverData.categories,
    price: data.price,
    rating: "3",
    description: data.description,
    genres: data.genres
      ? {
          [Object.keys(data.genres)[0]]: "true",
        }
      : serverData.genres,
    age: data.age.replace("+", ""),
  };

  store.dispatch(setGameCard({ ...newData, params: { url: undefined, typeOfEvent: "setCard" } }));

  if (typeOfEvent === "setCard") {
    return postGameCard(newData);
  }
  return editGameCardData(newData, `${MOCK_API_URL}/${urlAddress ? ENDPOINTS.topGames : ENDPOINTS.games}`);
};

export default normalizeData;
