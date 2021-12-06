import { useEffect, useState } from "react";
import { useParams } from "react-router";
import GameCardType from "@/types/Mockapi";
import Search from "../search/search";
import GameCardsBlock from "./gameCardsBlock/gameCardsBlock";
import getGamesData from "@/api/mockapiData";

const Products: React.FC = function () {
  const { platform } = useParams();
  const [cards, setCard] = useState<GameCardType[] | never[]>([]);
  const [name, setName] = useState("");

  const updateName = (value: string) => setName(value);

  useEffect(() => {
    async function fetchData() {
      setCard(await getGamesData("games"));
    }
    fetchData();
  }, []);

  return (
    <div className="main-container">
      <Search updateName={updateName} />
      <GameCardsBlock cards={cards} name={name} category={platform} />
    </div>
  );
};

export default Products;
