import input from "./searchInput.module.scss";

const SearchInput: React.FC = function () {
  return <input placeholder="Search" className={input.input} />;
};

export default SearchInput;
