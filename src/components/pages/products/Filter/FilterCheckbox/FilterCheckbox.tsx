import React from "react";
import { useDispatch } from "react-redux";
import styles from "./FilterCheckbox.module.scss";

interface reduxCallbackInterface {
  type: string;
  payload: string;
}

interface FilterCheckboxInterface {
  genre: string | undefined;
  reduxCallback: (actionPayload: string) => reduxCallbackInterface;
  name: string;
}

const FilterCheckbox = React.memo(({ genre, reduxCallback, name }: FilterCheckboxInterface) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.formItem}>
      <input onClick={() => dispatch(reduxCallback(name))} type="radio" value={name} checked={genre === name} />
      <h5>{name === "" ? "All" : name}</h5>
    </div>
  );
});

export default FilterCheckbox;
