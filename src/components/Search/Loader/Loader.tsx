import LoaderInterface from "@/types/loader";

const Loader: React.FC<LoaderInterface> = function ({ display, styleFirst, styleSecond }) {
  return <div className={display ? styleFirst : styleSecond} />;
};

export default Loader;
