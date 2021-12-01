import ApiObject from "./Mockapi";

type cardsBlockType = {
  cards: ApiObject[];
  name: string;
  category?: string | undefined;
};

export default cardsBlockType;
