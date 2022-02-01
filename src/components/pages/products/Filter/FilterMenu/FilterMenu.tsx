import Line from "@/components/Line/Line";
import styles from "./FilterMenu.module.scss";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

interface reduxCallbackInterface {
  type: string;
  payload: string;
}

interface FilterMenuInterface {
  title: string;
  storeInfo: string | undefined;
  menuArray: string[];
  checkActionCallback: (actionPayload: string) => reduxCallbackInterface;
}

const FilterMenu = function ({ title, storeInfo, menuArray, checkActionCallback }: FilterMenuInterface) {
  return (
    <>
      <h4 className={styles.title}>{title}</h4>
      <Line styleList="line" />
      <form className={styles.form}>
        {menuArray.map((el) => (
          <FilterCheckbox genre={storeInfo} reduxCallback={checkActionCallback} name={el} />
        ))}
      </form>
    </>
  );
};

export default FilterMenu;
