import filterActions from "./actions";
import FilterStateInterface from "./types";

interface FilterAction {
  type: string;
  payload?: unknown;
}

const defaultState = {
  genres: "",
  age: "",
  rating: "",
  priceFrom: "",
  priceTo: "",
};

export default function filterReducer(state: FilterStateInterface = defaultState, action: FilterAction | null = null) {
  if (!action) return state;

  switch (action.type) {
    case filterActions.SET_GENRE_ACTION:
      return { ...state, genres: action.payload as string };
    case filterActions.SET_AGE_ACTION:
      return { ...state, age: action.payload as string };
    case filterActions.SET_RATING_ACTION:
      return { ...state, rating: action.payload as string };
    case filterActions.SET_PRICE_FROM_ACTION:
      return { ...state, priceFrom: action.payload as string };
    case filterActions.SET_PRICE_TO_ACTION:
      return { ...state, priceTo: action.payload as string };
    default:
      return state;
  }
}
