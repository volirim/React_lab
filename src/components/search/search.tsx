import { useState } from "react";
import search from "./search.module.scss";

import SearchInput from "./searchInput/SearchInput";
import Loader from "./loader/Loader";
import { CustomProps } from "@/types/searchBlockProps";

const Search: React.FC<CustomProps> = function ({ updateGamesList, category }) {
  const [loaderDisplay, setDisplay] = useState(false);
  console.log(category);

  const updateDisplay = (value: boolean) => {
    setDisplay(value);
  };

  return (
    <div className={search.container}>
      <SearchInput updateGamesList={updateGamesList} updateDisplay={updateDisplay} category={category} />
      <Loader display={loaderDisplay} />
    </div>
  );
};

export default Search;

//
