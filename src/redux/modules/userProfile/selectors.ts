import { createSelector } from "reselect";
import { StoreInterface } from "../reducersCombined";

const profileSelector = (state: StoreInterface) => state.profile;

const userIdSelector = createSelector(profileSelector, (profile) => profile.id);

export { profileSelector, userIdSelector };
