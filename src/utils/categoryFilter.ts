import GameCardType from "../types/mockapi";

const filterCategories = (cards: GameCardType[], category: string | undefined) => {
  if (category) {
    return cards.filter((element) => element.categories.includes(category));
  }
  return cards;
};

export default filterCategories;
