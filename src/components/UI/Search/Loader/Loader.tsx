import React from "react";
import LoaderInterface from "@/types/loader";

const Loader: React.FC<LoaderInterface> = React.memo(({ display, styleFirst, styleSecond }) => (
  <div className={display ? styleFirst : styleSecond} />
));

export default Loader;
