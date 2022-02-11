import { createSelector } from "reselect";
import { StoreInterface } from "../reducersCombined";

const activeGameSelector = (state: StoreInterface) => state.activeGame.value;

const genresSelector = createSelector(activeGameSelector, (state) => state.genres);

export { genresSelector };

export default activeGameSelector;
