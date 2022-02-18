import uniqID from "uniqid";
import GameCardType from "@/types/gameCardType";

const createGameCardObject = (): GameCardType => {
  const id = uniqID();
  return {
    id,
    age: "",
    categories: {
      pc: undefined,
      playstation: undefined,
      xbox: undefined,
    },
    description: "",
    genres: {
      shooter: "true",
    },
    img: "",
    name: "",
    price: "",
    rating: "5",
  };
};

export default createGameCardObject;
