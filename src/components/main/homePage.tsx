import { useEffect, useState } from "react";
import GameCardType from "@/types/Mockapi";
import Search from "../search/search";
import GameCardsBlock from "./gameCardsBlock/gameCardsBlock";
import CategoriesBlock from "./categoriesBlock/categories";
import getGamesData from "@/api/mockapiData";

const Home = function () {
  const [cards, setCard] = useState<GameCardType[] | never[]>([]);
  const [name, setName] = useState("");

  const updateName = (value: string) => setName(value);

  useEffect(() => {
    async function fetchData() {
      setCard(await getGamesData("topgames"));
    }
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <Search updateName={updateName} />
      <CategoriesBlock />
      <GameCardsBlock cards={cards} name={name} />
    </div>
  );
};

export default Home;
