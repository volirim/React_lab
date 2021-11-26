import loader from "./loader.module.scss";

const Loader: React.FC = function () {
  return <div className={loader.circle} />;
};

export default Loader;
