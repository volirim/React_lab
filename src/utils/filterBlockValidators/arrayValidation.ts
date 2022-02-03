import { SetStateAction } from "react";
import getGamesData from "@/api/getMockapiData";
import store from "@/redux/store";

const validateArray = async (updateGamesList: (value: SetStateAction<never[]>) => void, urlAdress?: string) => {
  const { genres, age, rating, priceFrom, priceTo } = store.getState().filters;
  const name = store.getState().search.games;

  const normalizedPrice = (price: string) => price.padStart(2, "0");

  const nameUrl = () => (name ? `name_like=${name}` : "");
  const genresUrl = () => (genres ? `&genres.${genres}=true` : "");
  const ageUrl = () => (age ? `&age=${age.replace("+", "")}` : "");
  const ratingUrl = () => (rating ? `&rating=${rating}` : "");
  const priceToUrl = () => {
    if (priceFrom.length !== 0 && priceTo.length === 0) {
      return `&price_gte=${normalizedPrice(priceFrom)}`;
    }
    if (priceTo.length !== 0 && priceFrom.length === 0) {
      return `&price_lte=${normalizedPrice(priceTo)}`;
    }
    if (priceFrom.length !== 0 && priceTo.length !== 0) {
      return `&price_gte=${normalizedPrice(priceFrom)}&price_lte=${normalizedPrice(priceTo)}`;
    }
    return "";
  };

  const url = `/games?${nameUrl()}${genresUrl()}${ageUrl()}${ratingUrl()}${priceToUrl()}`;

  if (!urlAdress) {
    const gamesArray = await getGamesData(genres || age || rating || priceFrom || priceTo || name ? url : "/games");
    updateGamesList(gamesArray);
    return gamesArray;
  }
  const topGamesArray = await getGamesData("/topgames");
  updateGamesList(topGamesArray);
  return topGamesArray;
};

export default validateArray;
