import { useState } from "react";
import search from "./search.module.scss";

import SearchInput from "./searchInput/searchInput";
import Loader from "./loader/loader";
import { CustomProps } from "@/types/searchBlockProps";

const Search: React.FC<CustomProps> = function ({ updateName }) {
  const [loaderDisplay, setDisplay] = useState(false);

  const updateDisplay = (value: boolean) => {
    setDisplay(value);
  };

  const updateValue = (value: string) => {
    updateName(value);
  };

  return (
    <div className={search.container}>
      <SearchInput updateValue={updateValue} updateDisplay={updateDisplay} />
      <Loader display={loaderDisplay} />
    </div>
  );
};

export default Search;

//
