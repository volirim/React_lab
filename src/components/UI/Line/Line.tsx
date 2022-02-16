import React from "react";
import styles from "./Line.module.scss";

interface LineInterface {
  styleList: string;
}

const Line = React.memo(({ styleList }: LineInterface) => <div className={styles[styleList]} />);

export default Line;
