import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import uniqID from "uniqid";
import styles from "./PlatformMenu.module.scss";
import { checkChangePlatformAction } from "@/redux/modules/cart/actionCreate";
import getGamesData from "@/api/getMockapiData";
import { activePlatformSelector } from "@/redux/modules/cart/selectors";
import store from "@/redux/store";

interface PlatformMenuInterface {
  name: string;
}

const PlatformMenu = function ({ name }: PlatformMenuInterface) {
  const dispatch = useDispatch();
  const [activePlatform, setActivePlatform] = useState(activePlatformSelector(store.getState())(name));
  const [display, setDisplay] = useState(false);

  const [gamePlatforms, setGamePlatforms] = useState({ pc: "true", playstation: "true", xbox: "true" });

  useEffect(() => {
    (async function getPrice() {
      const game = await getGamesData(`/games?name=${name}`);
      setGamePlatforms(game[0].categories);
    })();
  }, []);

  const updatePlatform = (platformArray: string[], platform: string) => {
    const newArray = platformArray.map((element) => element);
    newArray.unshift(platform);

    const platformObject = newArray.reduce((previousValue, key) => ({ ...previousValue, [key]: true }), {});

    setActivePlatform(newArray[0]);
    dispatch(checkChangePlatformAction({ name, categories: platformObject }));
    return platformObject;
  };

  return (
    <select
      className={styles.mainItem}
      onChange={(e) => updatePlatform(Object.keys(gamePlatforms), e.target.value)}
      onClick={() => setDisplay(!display)}
    >
      {Object.keys(gamePlatforms).map((element) =>
        element === activePlatform ? (
          <option key={uniqID()} selected className={styles.menuItem}>
            {element}
          </option>
        ) : (
          <option key={uniqID()} className={styles.menuItem}>
            {element}
          </option>
        )
      )}
    </select>
  );
};

export default PlatformMenu;
