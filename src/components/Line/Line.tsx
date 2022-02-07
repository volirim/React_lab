import styles from "./Line.module.scss";

interface LineInterface {
  styleList: string;
}

const Line = function ({ styleList }: LineInterface) {
  return <div className={styles[styleList]} />;
};

export default Line;
