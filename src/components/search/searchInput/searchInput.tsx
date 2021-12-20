import debounce from "../../../utils/debounce";
// eslint-disable-next-line import/no-unresolved
import styles from "./SearchInput.module.scss";
import { SearchInputInterface } from "@/types/searchBlockProps";
import splitCards from "@/utils/splitCards";
import getGamesData from "@/api/getMockapiData";

const SearchInput: React.FC<SearchInputInterface> = function ({ updateGamesList, updateDisplay, category }) {
  console.log(category);
  const delayedFunc = debounce(async (e: { target: { value: string } }) => {
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
        if (e.target.value !== "") {
          updateDisplay(true);
          delayedFunc(e);
        }
      }}
    />
  );
};

export default SearchInput;
