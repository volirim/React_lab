import searchActions from "./actions";

const checkSearchAction = (payload: string) => ({
  type: searchActions.SET_DATA_ACTION,
  payload,
});

export default checkSearchAction;
