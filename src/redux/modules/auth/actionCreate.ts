import authActions from "./actions";

const checkAuthAction = (actionPayload: boolean) => ({
  type: authActions.IS_AUTHORISED_ACTION,
  payload: actionPayload,
});

export default checkAuthAction;
