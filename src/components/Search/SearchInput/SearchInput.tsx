import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import debounce from "../../../utils/debounce";
// eslint-disable-next-line import/no-unresolved
import styles from "./SearchInput.module.scss";
import { SearchInputInterface } from "@/types/searchBlockProps";
import checkSearchAction from "@/redux/modules/search/actionCreate";

const SearchInput: React.FC<SearchInputInterface> = function ({ updateDisplay }) {
  const dispatch = useDispatch();
  const delayedFunc = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    updateDisplay(false);
    dispatch(checkSearchAction({ games: e.target.value }));
  }, 300);

  return (
    <input
      placeholder="Search"
      className={styles.input}
      onChange={(e) => {
        updateDisplay(true);
        delayedFunc(e);
      }}
    />
  );
};

export default SearchInput;
