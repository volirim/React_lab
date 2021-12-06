import GameCardType from "@/types/Mockapi";

const splitCards = (cards: GameCardType[], names: string, category: string | undefined) => {
  function mappedArray(array: GameCardType[]) {
    return array.filter((element: GameCardType) => element.name.toLowerCase().includes(names.toLowerCase()));
  }

  if (category) {
    return mappedArray(cards.filter((element) => element.categories.includes(category)));
  }
  return mappedArray(cards);
};

export default splitCards;
