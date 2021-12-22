// eslint-disable-next-line import/no-cycle
import { DefaultStateInterface } from "../../store";
import authActions from "./actions";

const defaultState = {
  authorised: JSON.parse(localStorage.getItem("authorised")!),
};

export default function isAuthorised(
  // eslint-disable-next-line default-param-last
  state: DefaultStateInterface = defaultState,
  action: { type: string; payload: boolean }
) {
  switch (action.type) {
    case authActions.IS_AUTHORISED_ACTION:
      return { ...state, authorised: action.payload };
    default:
      return state;
  }
}
