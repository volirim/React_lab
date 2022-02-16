import React from "react";
import Line from "@/components/UI/Line/Line";
import styles from "./FilterMenu.module.scss";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

interface reduxCallbackInterface {
  type: string;
  payload: string;
}

interface FilterMenuInterface {
  title: string;
  storeInfo: string | undefined;
  menuArray: { key: string; name: string }[];
  checkActionCallback: (actionPayload: string) => reduxCallbackInterface;
}

const FilterMenu = React.memo(({ title, storeInfo, menuArray, checkActionCallback }: FilterMenuInterface) => (
  <>
    <h4 className={styles.title}>{title}</h4>
    <Line styleList="line" />
    <form className={styles.form}>
      {menuArray.map((el) => (
        <FilterCheckbox genre={storeInfo} key={el.key} reduxCallback={checkActionCallback} name={el.name} />
      ))}
    </form>
  </>
));

export default FilterMenu;
