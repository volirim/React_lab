import authActions from "./actions";
import AuthState from "./types";

interface AuthAction {
  type: string;
  payload?: unknown;
}

const defaultState = {
  authorised: false,
};

export default function authReducer(state: AuthState = defaultState, action: AuthAction | null = null) {
  if (!action) return state;

  switch (action.type) {
    case authActions.IS_AUTHORISED_ACTION:
      return { ...state, authorised: action.payload as boolean };
    default:
      return state;
  }
}
