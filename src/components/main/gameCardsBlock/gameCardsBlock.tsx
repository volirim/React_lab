import { useEffect, useState } from "react";
import GameCard from "../gameCard/gameCard";
import ApiObject from "@/types/Mockapi";

const GameCardsBlock = function () {
  const [cards, setCard] = useState<ApiObject[] | never[]>([]);

  useEffect(() => {
    fetch("https://61a36f44d5e8330017292010.mockapi.io/games")
      .then((response) => response.json())
      .then((response) => setCard(response));
  }, []);

  return <>{cards.length ? cards.map((element) => <GameCard {...element} />) : <div>Игр нет</div>}</>;
};

export default GameCardsBlock;
