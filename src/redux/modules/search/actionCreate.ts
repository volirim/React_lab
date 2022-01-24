import searchActions from "./actions";
import SearchStateInterface from "./types";

const checkSearchAction = (payload: SearchStateInterface) => ({
  type: searchActions.SET_DATA_ACTION,
  payload,
});

export default checkSearchAction;
