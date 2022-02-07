import { createSelector } from "reselect";
import { StoreInterface } from "../reducersCombined";

const profileSelector = (state: StoreInterface) => state.profile;

const isAdminSelector = createSelector(profileSelector, (profile) => profile.isAdmin);

export default isAdminSelector;
