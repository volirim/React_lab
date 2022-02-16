import { StoreInterface } from "../reducersCombined";

const selectAuth = (state: StoreInterface) => state.auth.authorised;

export default selectAuth;
