import search from "./search.module.scss";

import SearchInput from "./searchInput/searchInput";
import Loader from "./loader/loader";

const Search: React.FC = function () {
  return (
    <div className={search.container}>
      <SearchInput />
      <Loader />
    </div>
  );
};

export default Search;
