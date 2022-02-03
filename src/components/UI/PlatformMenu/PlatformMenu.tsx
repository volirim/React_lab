import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import styles from "./PlatformMenu.module.scss";
import { checkChangePlatformAction } from "@/redux/modules/cart/actionCreate";
import getGamesData from "@/api/getMockapiData";
import { activePlatformSelector } from "@/redux/modules/cart/selectors";

interface PlatformMenuInterface {
  name: string;
}

type PlatformObjectType = {
  [key: string]: boolean;
};

const PlatformMenu = function ({ name }: PlatformMenuInterface) {
  const store = useSelector((state: StoreInterface) => state);
  const dispatch = useDispatch();
  const [activePlatform, setActivePlatform] = useState(activePlatformSelector(store)(name));
  const [display, setDisplay] = useState(false);

  const [gamePlatforms, setGamePlatforms] = useState({ pc: "true", playstation: "true", xbox: "true" });

  useEffect(() => {
    async function getPrice() {
      const game = await getGamesData(`/games?name=${name}`);
      setGamePlatforms(game[0].categories);
    }
    getPrice();
  }, []);

  const updatePlatform = (platformArray: string[], platform: string) => {
    const newArray = [platform];

    platformArray.map((element) => newArray.push(element));
    const platformObject: PlatformObjectType = {};

    newArray.map((element: string) => {
      platformObject[element] = true;
    });
    setActivePlatform(Object.keys(platformObject)[0]);
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
          <option selected className={styles.menuItem}>
            {element}
          </option>
        ) : (
          <option className={styles.menuItem}>{element}</option>
        )
      )}
    </select>
  );
};

export default PlatformMenu;
