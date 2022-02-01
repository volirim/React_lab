import { useSelector } from "react-redux";
import Line from "@/components/Line/Line";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import styles from "./FilterBlock.module.scss";
import FilterMenu from "../FilterMenu/FilterMenu";
import AGE from "@/constants/filterNames/ages";
import { checkGenresAction, checkAgeAction, checkRatingAction } from "@/redux/modules/filters/actionCreate";
import GENRES from "@/constants/filterNames/genres";
import RATING from "@/constants/filterNames/rating";
import FilterByPrice from "../FilterByPrice/FilterByPrice";

const FilterBlock = function () {
  const { genres, age, rating } = useSelector((state: StoreInterface) => state.filters);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>PC</h3>
      <Line styleList="line" />
      <FilterByPrice />
      <FilterMenu title="Genres" storeInfo={genres} menuArray={GENRES} checkActionCallback={checkGenresAction} />
      <FilterMenu title="Age" storeInfo={age} menuArray={AGE} checkActionCallback={checkAgeAction} />
      <FilterMenu title="Rating" storeInfo={rating} menuArray={RATING} checkActionCallback={checkRatingAction} />
    </div>
  );
};

export default FilterBlock;
