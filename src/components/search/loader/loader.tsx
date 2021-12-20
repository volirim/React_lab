import styles from "./Loader.module.scss";
import LoaderInterface from "@/types/loader";

const Loader: React.FC<LoaderInterface> = function ({ display }) {
  return <div className={display ? styles.circle : styles.none} />;
};

export default Loader;
