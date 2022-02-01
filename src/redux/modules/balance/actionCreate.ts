import balanceActions from "./actions";

const checkBalanceAction = (actionPayload: string) => ({
  type: balanceActions.SET_BALANCE_ACTION,
  payload: actionPayload,
});

export default checkBalanceAction;
