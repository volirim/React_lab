import { checkClearAction } from "@/redux/modules/filters/actionCreate";
import checkSearchAction from "@/redux/modules/search/actionCreate";
import store from "@/redux/store";

const clearFiltersFunction = () => {
  store.dispatch(checkSearchAction(""));
  store.dispatch(checkClearAction(""));
};

export default clearFiltersFunction;
