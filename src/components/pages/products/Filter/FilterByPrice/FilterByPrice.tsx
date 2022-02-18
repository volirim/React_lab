import { useDispatch } from "react-redux";
import React, { ChangeEvent } from "react";
import Line from "@/components/UI/Line/Line";
import styles from "./FilterByPrice.module.scss";
import { checkPriceFromAction, checkPriceToAction } from "@/store/modules/filters/actionCreate";

const FilterByPrice = React.memo(() => {
  const dispatch = useDispatch();

  const onChangeFromFunc = (e: ChangeEvent<HTMLInputElement>) => dispatch(checkPriceFromAction(e.target.value));
  const onChangeToFunc = (e: ChangeEvent<HTMLInputElement>) => dispatch(checkPriceToAction(e.target.value));

  return (
    <>
      <h4 className={styles.title}>Price</h4>
      <Line styleList="line" />
      <p className={styles.text}>From</p>
      <input type="text" className={styles.input} onChange={(e) => onChangeFromFunc(e)} />
      <p className={styles.text}>To</p>
      <input type="text" className={styles.input} onChange={(e) => onChangeToFunc(e)} />
    </>
  );
});

export default FilterByPrice;
