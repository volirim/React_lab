import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "@/components/UI/Search/Loader/Loader";
import debounce from "@/utils/debounce";
import { StoreInterface } from "@/store/modules/reducersCombined";

const useLoader = (styleShown: string, styleHidden: string, reactComponent: JSX.Element[]) => {
  const [display, setDisplay] = useState(true);
  const filters = useSelector((state: StoreInterface) => state.filters);
  const search = useSelector((state: StoreInterface) => state.search);

  useEffect(() => {
    setDisplay(true);
    const changeDisplay = debounce(() => setDisplay(false), 500);

    changeDisplay();
  }, [filters, search]);

  return (
    <>
      <Loader display={display} styleFirst={styleShown} styleSecond={styleHidden} />
      {!display ? reactComponent : null}
    </>
  );
};

export default useLoader;
