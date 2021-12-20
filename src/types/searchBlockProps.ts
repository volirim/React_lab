import GameCardType from "./mockapi";

interface CustomProps {
  updateGamesList: (value: GameCardType[]) => void;
  category?: string;
}

interface SearchInputInterface {
  updateGamesList: (value: GameCardType[]) => void;
  updateDisplay: (value: boolean) => void;
  category?: string;
}

export { CustomProps, SearchInputInterface };
