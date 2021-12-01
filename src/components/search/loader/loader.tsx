import loader from "./loader.module.scss";
import LoaderInterface from "@/types/loader";

const Loader: React.FC<LoaderInterface> = function ({ display }) {
  return <div className={display ? loader.circle : loader.none} />;
};

export default Loader;
