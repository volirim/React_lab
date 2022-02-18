import { checkClearAction } from "@/store/modules/filters/actionCreate";
import checkSearchAction from "@/store/modules/search/actionCreate";
import store from "@/store/store";

const clearFiltersFunction = () => {
  store.dispatch(checkSearchAction(""));
  store.dispatch(checkClearAction(""));
};

export default clearFiltersFunction;
