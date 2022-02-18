import profileActions from "./actions";
import ProfileStateInterface from "./types";

const checkProfileAction = (payload: ProfileStateInterface) => ({
  type: profileActions.GET_DATA_ACTION,
  payload,
});

export const changeProfileImage = (payload: ProfileStateInterface) => ({
  type: profileActions.GET_DATA_ACTION,
  payload,
});

export default checkProfileAction;
