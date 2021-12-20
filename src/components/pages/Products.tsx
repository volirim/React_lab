import { useEffect, useState } from "react";
import { useParams } from "react-router";
import GameCardType from "@/types/mockapi";
import Search from "../search/Search";
import GameCardsBlock from "../main/gameCardsBlock/GameCardsBlock";
import splitCards from "@/utils/splitCards";

const Products: React.FC = function () {
  const { platform } = useParams();
  const [gamesList, setGamesList] = useState<GameCardType[]>([]);

  const updateGamesList = (value: GameCardType[]) => setGamesList(value);

  useEffect(() => {
    async function fetchData() {
      setGamesList(await splitCards("", platform));
    }
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <Search updateGamesList={updateGamesList} category={platform} />
      <GameCardsBlock cards={gamesList} category={platform} />
    </div>
  );
};

export default Products;
