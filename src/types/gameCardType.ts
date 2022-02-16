type GameCardType = {
  id: string;
  name: string;
  img: string;
  categories: { pc?: string; playstation?: string; xbox?: string };
  price: string;
  rating: string;
  description: string;
  genres: {
    shooter?: string;
    arcade?: string;
    strategy?: string;
    racing?: string;
    fighting?: string;
    survive?: string;
  };
  age: string;
};

export default GameCardType;
