// eslint-disable-next-line import/no-extraneous-dependencies
import { debounce } from "lodash";
import input from "./searchInput.module.scss";
import { SearchInputInterface } from "@/types/searchBlockProps";

const SearchInput: React.FC<SearchInputInterface> = function ({ updateValue, updateDisplay }) {
  const delayedFunc = debounce((e) => {
    updateDisplay(false);
    return updateValue(e.target.value);
  }, 300);

  return (
    <input
      placeholder="Search"
      className={input.input}
      onChange={(e) => {
        updateDisplay(true);
        delayedFunc(e);
      }}
    />
  );
};

export default SearchInput;
