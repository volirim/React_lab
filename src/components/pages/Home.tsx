import { useEffect, useState } from "react";
import GameCardType from "@/types/mockapi";
import Search from "../search/Search";
import GameCardsBlock from "../main/gameCardsBlock/GameCardsBlock";
import CategoriesBlock from "../main/categoriesBlock/Categories";
import ModalRoot from "../modal/Modal";
import { HomePagePropsInterface } from "@/types/homePagePropsInterface";
import { removeClass } from "@/utils/setClass";
import getGamesData from "@/api/getMockapiData";

const Home = function ({ modalIsOpen, updateUserStatus }: HomePagePropsInterface) {
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
      {modalIsOpen && <ModalRoot updateUserStatus={updateUserStatus} />}
    </div>
  );
};

export default Home;
