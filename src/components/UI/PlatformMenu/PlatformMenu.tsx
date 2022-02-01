/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import styles from "./PlatformMenu.module.scss";
import { checkChangePlatformAction } from "@/redux/modules/cart/actionCreate";

interface PlatformMenuInterface {
  array: string[];
  name: string;
}

type PlatformObjectType = {
  [key: string]: boolean;
};

const PlatformMenu = function ({ array, name }: PlatformMenuInterface) {
  const dispatch = useDispatch();
  const games = useSelector((state: StoreInterface) => state.cart.cart);
  const currentGame = games.filter((element) => element.name === name)[0];
  const [activePlatform, setActivePlatform] = useState(Object.keys(currentGame.categories)[0]);
  const [display, setDisplay] = useState(false);

  const updatePlatform = (platformArray: string[], platform: string) => {
    const newArray = [platform];

    platformArray.map((element) => newArray.push(element));
    const platformObject: PlatformObjectType = {};

    // eslint-disable-next-line no-return-assign
    newArray.map((element: string) => (platformObject[element] = true));
    setActivePlatform(Object.keys(platformObject)[0]);
    dispatch(checkChangePlatformAction({ name, categories: platformObject }));
    return platformObject;
  };

  return (
    <>
      <div className={styles.mainItem} onClick={() => setDisplay(!display)}>
        {activePlatform}
      </div>
      <div className={display ? styles.menuShown : styles.menuHidden}>
        {array.map((element) =>
          array.indexOf(element, 0) !== 0 ? (
            <div className={styles.menuItem} onClick={() => updatePlatform(array, element)}>
              {element}
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default PlatformMenu;
