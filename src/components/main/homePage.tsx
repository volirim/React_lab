import { useEffect, useState } from "react";
import GameCardType from "@/types/Mockapi";
import Search from "../search/search";
import GameCardsBlock from "./gameCardsBlock/gameCardsBlock";
import CategoriesBlock from "./categoriesBlock/categories";

const Home = function () {
  const [cards, setCard] = useState<GameCardType[] | never[]>([]);
  const [name, setName] = useState("");

  const updateName = (value: string) => setName(value);

  useEffect(() => {
    fetch("https://61a36f44d5e8330017292010.mockapi.io/topgames")
      .then((response) => response.json())
      .then((response) => setCard(response));
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
