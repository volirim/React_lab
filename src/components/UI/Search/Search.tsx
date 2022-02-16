import React, { useState } from "react";
import styles from "./Search.module.scss";

import SearchInput from "./SearchInput/SearchInput";
import Loader from "./Loader/Loader";
import loaderStyles from "./Loader/Loader.module.scss";
import { CustomProps } from "@/types/searchBlockProps";

const Search: React.FC<CustomProps> = React.memo(({ category, url }) => {
  const [loaderDisplay, setDisplay] = useState(false);

  const updateDisplay = (value: boolean) => {
    setDisplay(value);
  };

  return (
    <div className={styles.container}>
      <SearchInput updateDisplay={updateDisplay} category={category} url={url} />
      <Loader display={loaderDisplay} styleFirst={loaderStyles.circle} styleSecond={loaderStyles.none} />
    </div>
  );
});

export default Search;

//
