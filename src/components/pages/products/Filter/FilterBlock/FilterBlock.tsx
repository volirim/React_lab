import { useSelector } from "react-redux";
import React from "react";
import Line from "@/components/UI/Line/Line";
import styles from "./FilterBlock.module.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import AGE from "@/constants/filterNames/ages";
import { checkGenresAction, checkAgeAction, checkRatingAction } from "@/store/modules/filters/actionCreate";
import GENRES from "@/constants/filterNames/genres";
import RATING from "@/constants/filterNames/rating";
import FilterByPrice from "../FilterByPrice/FilterByPrice";
import filtersSelector from "@/store/modules/filters/selectors";

interface FilterBlock {
  category: string | undefined;
}

const FilterBlock = React.memo(({ category }: FilterBlock) => {
  const { genres, age, rating } = useSelector(filtersSelector);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{category ? `FILTER IN ${category.toUpperCase()}` : "FILTER IN GAMES"}</h3>
      <Line styleList="line" />
      <FilterByPrice />
      <FilterMenu title="Genres" storeInfo={genres} menuArray={GENRES} checkActionCallback={checkGenresAction} />
      <FilterMenu title="Age" storeInfo={age} menuArray={AGE} checkActionCallback={checkAgeAction} />
      <FilterMenu title="Rating" storeInfo={rating} menuArray={RATING} checkActionCallback={checkRatingAction} />
    </div>
  );
});

export default FilterBlock;
