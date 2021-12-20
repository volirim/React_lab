import { useEffect, useState } from "react";
import GameCardType from "@/types/mockapi";
import Search from "../search/Search";
import GameCardsBlock from "../main/gameCardsBlock/GameCardsBlock";
import CategoriesBlock from "../main/categoriesBlock/Categories";
import { removeClass } from "@/utils/classes";
import getGamesData from "@/api/getMockapiData";

const Home = function () {
  removeClass("body", "modalOpened");

  const [gamesList, setGamesList] = useState<GameCardType[]>([]);

  useEffect(() => {
    async function fetchData() {
      setGamesList(await getGamesData("/topgames"));
    }
    fetchData();
  }, []);

  const updateGamesList = (value: GameCardType[]) => setGamesList(value);

  return (
    <div className="main-container">
      <Search updateGamesList={updateGamesList} />
      <CategoriesBlock />
      <GameCardsBlock cards={gamesList} />
    </div>
  );
};

export default Home;
