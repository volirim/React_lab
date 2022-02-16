import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import cardsBlockStyles from "./GameCards.module.scss";
import titleStyles from "../Categories/Categories.module.scss";
import cardsBlockType from "@/types/cardsBlock";
import filterCategories from "@/utils/categoryFilter";
import GameCard from "../GameCard/GameCard";
import validateArray from "@/utils/filterBlockValidators/arrayValidation";
import useLoader from "@/hooks/useLoader/useLoader";
import loaderStyles from "../../../../hooks/useLoader/useLoader.module.scss";
import filtersSelector from "@/store/modules/filters/selectors";
import activeGameSelector from "@/store/modules/gameCardEditor/selectors";
import selectSearch from "@/store/modules/search/selectors";

const GameCardsBlock = React.memo(({ category, urlAdress }: cardsBlockType) => {
  const [gamesList, setGamesList] = useState([]);
  const { genres, age, rating, priceFrom, priceTo } = useSelector(filtersSelector);
  const activeGame = useSelector(activeGameSelector);
  const { games } = useSelector(selectSearch);

  const loader = useLoader(
    loaderStyles.circle,
    loaderStyles.none,
    filterCategories(gamesList, category).map((element) => (
      <GameCard data={element} key={element.id} urlAddress={urlAdress} />
    ))
  );

  useEffect(() => {
    (async function setGames() {
      const list = await validateArray(urlAdress);
      setGamesList(list);
    })();
  }, [genres, age, rating, priceFrom, priceTo, games, activeGame]);

  return (
    <div className={cardsBlockStyles.container}>
      <div className={titleStyles.top}>
        <h3 className={titleStyles.title}>{category ? category.toUpperCase() : "Games"}</h3>
        <div className={titleStyles.line} />
      </div>
      <div className={cardsBlockStyles.gameCards}>{loader}</div>
    </div>
  );
});

export default GameCardsBlock;
