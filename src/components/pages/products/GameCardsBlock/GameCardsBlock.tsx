import { SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cardsBlockStyles from "./GameCards.module.scss";
import titleStyles from "../Categories/Categories.module.scss";
import cardsBlockType from "@/types/cardsBlock";
import filterCategories from "@/utils/categoryFilter";
import GameCard from "../GameCard/GameCard";
import validateArray from "@/utils/filterBlockValidators/arrayValidation";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import useLoader from "@/hooks/useLoader/useLoader";
import loaderStyles from "../../../../hooks/useLoader/useLoader.module.scss";

const GameCardsBlock = function ({ category, urlAdress }: cardsBlockType) {
  const [gamesList, setGamesList] = useState([]);
  const updateGamesList = (value: SetStateAction<never[]>) => setGamesList(value);
  const { genres, age, rating, priceFrom, priceTo } = useSelector((state: StoreInterface) => state.filters);
  const { games } = useSelector((state: StoreInterface) => state.search);

  const loader = useLoader(
    loaderStyles.circle,
    loaderStyles.none,
    filterCategories(gamesList, category).map((element) => <GameCard {...element} />)
  );

  useEffect(() => {
    async function setGames() {
      const list = await validateArray(updateGamesList, urlAdress);
      setGamesList(list);
    }
    setGames();
  }, [genres, age, rating, priceFrom, priceTo, games]);

  return (
    <div className={cardsBlockStyles.container}>
      <div className={titleStyles.top}>
        <h3 className={titleStyles.title}>{category ? category.toUpperCase() : "Games"}</h3>
        <div className={titleStyles.line} />
      </div>
      <div className={cardsBlockStyles.gameCards}>
        {loader}

        {}
      </div>
    </div>
  );
};

export default GameCardsBlock;
