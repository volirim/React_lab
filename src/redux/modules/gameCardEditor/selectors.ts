import { StoreInterface } from "../reducersCombined";

const activeGameSelector = (state: StoreInterface) => state.activeGame.value;

export default activeGameSelector;
