import { ChangeEvent } from "react";
import debounce from "../../../utils/debounce";
// eslint-disable-next-line import/no-unresolved
import styles from "./SearchInput.module.scss";
import { SearchInputInterface } from "@/types/searchBlockProps";
import splitCards from "@/utils/splitCards";
import getGamesData from "@/api/getMockapiData";

const SearchInput: React.FC<SearchInputInterface> = function ({ updateGamesList, updateDisplay, category }) {
  const delayedFunc = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    updateDisplay(false);
    if (category) {
      return updateGamesList(
        e.target.value !== "" ? await splitCards(e.target.value, category) : await getGamesData("/games")
      );
    }
    return updateGamesList(e.target.value !== "" ? await splitCards(e.target.value) : await getGamesData("/topgames"));
  }, 300);

  return (
    <input
      placeholder="Search"
      className={styles.input}
      onChange={(e) => {
        console.log(e.target.value);

        if (e.target.value !== "") {
          updateDisplay(true);
          delayedFunc(e);
        }
      }}
    />
  );
};

export default SearchInput;
