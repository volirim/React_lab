import balanceActions from "./actions";
import BalanceState from "./types";

interface BalanceAction {
  type: string;
  payload?: unknown;
}

const defaultState = {
  balance: "4000",
};

export default function balanceReducer(state: BalanceState = defaultState, action: BalanceAction | null = null) {
  if (!action) return state;

  switch (action.type) {
    case balanceActions.SET_BALANCE_ACTION:
      return { ...state, balance: action.payload as string };
    default:
      return state;
  }
}
