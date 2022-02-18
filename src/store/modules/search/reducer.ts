import gameCardsActions from "./actions";
import SearchStateInterface from "./types";

interface SearchAction {
  type: string;
  payload?: unknown;
}

export const defaultProfileState = {
  games: "",
};

export default function searchReducer(
  state: SearchStateInterface = defaultProfileState,
  action: SearchAction | null = null
) {
  if (!action) return state;

  switch (action.type) {
    case gameCardsActions.SET_DATA_ACTION:
      return { ...state, games: action.payload as string };
    default:
      return state;
  }
}
