import { StoreInterface } from "../reducersCombined";

const filtersSelector = (state: StoreInterface) => state.filters;

export default filtersSelector;
