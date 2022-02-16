import getGamesData from "@/api/getMockapiData";
import store from "@/store/store";

const validateArray = async (urlAdress?: string) => {
  const { genres, age, rating, priceFrom, priceTo } = store.getState().filters;
  const { games } = store.getState().search;
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
    return gamesArray;
  }

  if (games.length === 0) {
    const topGamesArray = await getGamesData(`/games?_sort=rating`);
    return topGamesArray.slice(-3);
  }

  const topGamesArray = await getGamesData(`/games?name_like=${games}`);
  return topGamesArray;
};

export default validateArray;
