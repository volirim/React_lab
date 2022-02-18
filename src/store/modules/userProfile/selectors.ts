import { createSelector } from "reselect";
import { StoreInterface } from "../reducersCombined";

const profileSelector = (state: StoreInterface) => state.profile;

const isAdminSelector = createSelector(profileSelector, (profile) => profile.isAdmin);

const userIdSelector = createSelector(profileSelector, (profile) => profile.id);

export { profileSelector, userIdSelector, isAdminSelector };
