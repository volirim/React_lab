import filterActions from "./actions";

const checkGenresAction = (actionPayload: string) => ({
  type: filterActions.SET_GENRE_ACTION,
  payload: actionPayload,
});

const checkAgeAction = (actionPayload: string) => ({
  type: filterActions.SET_AGE_ACTION,
  payload: actionPayload,
});

const checkRatingAction = (actionPayload: string) => ({
  type: filterActions.SET_RATING_ACTION,
  payload: actionPayload,
});

const checkPriceFromAction = (actionPayload: string) => ({
  type: filterActions.SET_PRICE_FROM_ACTION,
  payload: actionPayload,
});

const checkPriceToAction = (actionPayload: string) => ({
  type: filterActions.SET_PRICE_TO_ACTION,
  payload: actionPayload,
});

const checkClearAction = (actionPayload: string) => ({
  type: filterActions.CLEAR_STATE_ACTION,
  payload: actionPayload,
});

export {
  checkGenresAction,
  checkAgeAction,
  checkRatingAction,
  checkPriceFromAction,
  checkPriceToAction,
  checkClearAction,
};
