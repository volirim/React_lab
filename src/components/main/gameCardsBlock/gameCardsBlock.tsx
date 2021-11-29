import { useEffect, useState } from "react";
import GameCard from "../gameCard/gameCard";
import ApiObject from "@/types/Mockapi";
import cardsBlock from "./gameCards.module.scss";
import title from "../categoriesBlock/categories.module.scss";

const GameCardsBlock = function () {
  const [cards, setCard] = useState<ApiObject[] | never[]>([]);

  useEffect(() => {
    fetch("https://61a36f44d5e8330017292010.mockapi.io/games")
      .then((response) => response.json())
      .then((response) => setCard(response));
  }, []);

  return (
    <div className={cardsBlock.container}>
      <div className={title.top}>
        <h3 className={title.title}>Games</h3>
        <div className={title.line} />
      </div>
      <div className={cardsBlock.bottom}>
        {cards.length ? cards.map((element) => <GameCard {...element} />) : <div>Игр нет</div>}
      </div>{" "}
    </div>
  );
};

export default GameCardsBlock;
