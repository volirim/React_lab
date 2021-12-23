import { useState } from "react";
import styles from "./Search.module.scss";

import SearchInput from "./searchInput/SearchInput";
import Loader from "./loader/Loader";
import { CustomProps } from "@/types/searchBlockProps";

const Search: React.FC<CustomProps> = function ({ updateGamesList, category }) {
  const [loaderDisplay, setDisplay] = useState(false);

  const updateDisplay = (value: boolean) => {
    setDisplay(value);
  };

  return (
    <div className={styles.container}>
      <SearchInput updateGamesList={updateGamesList} updateDisplay={updateDisplay} category={category} />
      <Loader display={loaderDisplay} />
    </div>
  );
};

export default Search;

//
