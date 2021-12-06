import GameCardType from "./Mockapi";

type cardsBlockType = {
  cards: GameCardType[];
  name: string;
  category?: string | undefined;
};

export default cardsBlockType;
