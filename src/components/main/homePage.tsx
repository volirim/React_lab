import { useEffect, useState } from "react";
import GameCardType from "@/types/Mockapi";
import Search from "../search/search";
import GameCardsBlock from "./gameCardsBlock/gameCardsBlock";
import CategoriesBlock from "./categoriesBlock/categories";
import getGamesData from "@/api/mockapiData";
import ModalRoot from "../modal/Modal";
import { HomePagePropsInterface } from "@/types/homePagePropsInterface";

const Home = function ({ modalIsOpen, updateUserStatus }: HomePagePropsInterface) {
  document.body.setAttribute("style", "overflowY: scroll");

  const [cards, setCard] = useState<GameCardType[] | never[]>([]);
  const [name, setName] = useState("");

  const updateName = (value: string) => setName(value);

  useEffect(() => {
    async function fetchData() {
      setCard(await getGamesData("topgames"));
    }
    fetchData();
  }, []);

  if (modalIsOpen) {
    return (
      <div className="main-container">
        <Search updateName={updateName} />
        <CategoriesBlock />
        <GameCardsBlock cards={cards} name={name} />
        <ModalRoot updateUserStatus={updateUserStatus} />
      </div>
    );
  }
  return (
    <div className="main-container">
      <Search updateName={updateName} />
      <CategoriesBlock />
      <GameCardsBlock cards={cards} name={name} />
    </div>
  );
};

export default Home;
