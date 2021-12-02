import { useEffect, useState } from "react";
import { useParams } from "react-router";
import GameCardType from "@/types/Mockapi";
import Search from "../search/search";
import GameCardsBlock from "./gameCardsBlock/gameCardsBlock";

const Products: React.FC = function () {
  const { id } = useParams();
  const [cards, setCard] = useState<GameCardType[] | never[]>([]);
  const [name, setName] = useState("");

  const updateName = (value: string) => setName(value);

  useEffect(() => {
    fetch("https://61a36f44d5e8330017292010.mockapi.io/games")
      .then((response) => response.json())
      .then((response) => setCard(response));
  }, []);

  return (
    <div className="main-container">
      <Search updateName={updateName} />
      <GameCardsBlock cards={cards} name={name} category={id} />
    </div>
  );
};

export default Products;
