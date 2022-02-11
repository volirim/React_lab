import profileActions from "./actions";
import ProfileStateInterface from "./types";

interface ProfileAction {
  type: string;
  payload?: ProfileStateInterface;
}

export const defaultProfileState = {
  id: 1,
  login: "test",
  password: "test",
  isAdmin: false,
};

export default function profileReducer(
  state: ProfileStateInterface = defaultProfileState,
  action: ProfileAction | null = null
) {
  if (!action) return state;

  switch (action.type) {
    case profileActions.GET_DATA_ACTION:
      return { ...state, ...action?.payload };
    default:
      return state;
  }
}
