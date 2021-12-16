// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from "lodash";
import input from "./searchInput.module.scss";
import { SearchInputInterface } from "@/types/searchBlockProps";
import splitCards from "@/utils/splitCards";
import getGamesData from "@/api/getMockapiData";

const SearchInput: React.FC<SearchInputInterface> = function ({ updateGamesList, updateDisplay, category }) {
  console.log(category);
  const delayedFunc = debounce(async (e) => {
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
      className={input.input}
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
