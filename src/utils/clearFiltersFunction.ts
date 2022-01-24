import {
  checkAgeAction,
  checkGenresAction,
  checkPriceFromAction,
  checkPriceToAction,
  checkRatingAction,
} from "@/redux/modules/filters/actionCreate";
import checkSearchAction from "@/redux/modules/search/actionCreate";
import store from "@/redux/store";

const clearFiltersFunction = () => {
  store.dispatch(checkSearchAction({ games: "" }));
  store.dispatch(checkGenresAction(""));
  store.dispatch(checkAgeAction(""));
  store.dispatch(checkRatingAction(""));
  store.dispatch(checkPriceFromAction(""));
  store.dispatch(checkPriceToAction(""));
};

export default clearFiltersFunction;
