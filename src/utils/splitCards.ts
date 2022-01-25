import getGamesData from "@/api/getMockapiData";
import GameCardType from "@/types/mockapi";

const splitCards = async (name: string, category?: string | undefined) => {
  const cards: GameCardType[] = await getGamesData("/games");

  function mappedArray(array: GameCardType[]) {
    return array.filter((element: GameCardType) => element.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (category) {
    return mappedArray(cards.filter((element) => Object.keys(element.categories).includes(category)));
  }

  return mappedArray(cards);
};

export default splitCards;
