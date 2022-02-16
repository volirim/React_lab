import editGameCardData from "@/api/editGameCardData";
import getGamesData from "@/api/getMockapiData";
import postGameCard from "@/api/postGameCard";
import MOCK_API_URL, { ENDPOINTS } from "@/constants/mockapiURL";
import SET_CARD from "@/constants/typeOfEditCardEvent";
import { setGameCard } from "@/store/modules/gameCardEditor/gameCardEditor";
import store from "@/store/store";
import FormInterface from "@/types/formInterface";
import GameCardType from "@/types/gameCardType";
import normilizeGenres from "./normalizeCategories";

const normalizeData = async (data: FormInterface, id: string, urlAddress: string | undefined, typeOfEvent: string) => {
  const serverData: GameCardType =
    typeOfEvent === SET_CARD
      ? { genres: { shooter: "true" }, categories: { pc: "true" } }
      : await getGamesData(`/${urlAddress ? ENDPOINTS.topGames : ENDPOINTS.games}/${id}`);

  const newPrice = data.price.includes(",") ? data.price.replace(",", ".") : data.price;

  const newData = {
    id,
    name: data.name,
    img: data.img,
    categories: data.categories
      ? normilizeGenres(data.categories).reduce((previous, category) => ({ ...previous, [category]: "true" }), {})
      : serverData.categories,
    price: newPrice,
    rating: "3",
    description: data.description,
    genres: data.genres
      ? {
          [Object.keys(data.genres)[0]]: "true",
        }
      : serverData.genres,
    age: data.age.replace("+", ""),
  };

  store.dispatch(setGameCard({ ...newData, params: { url: undefined, typeOfEvent: SET_CARD } }));

  if (typeOfEvent === SET_CARD) {
    return postGameCard(newData);
  }
  return editGameCardData(newData, `${MOCK_API_URL}/${ENDPOINTS.games}`);
};

export default normalizeData;
