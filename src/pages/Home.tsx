import GameCardsBlock from "../components/pages/products/GameCardsBlock/GameCardsBlock";
import CategoriesBlock from "../components/pages/products/Categories/Categories";
import { removeClass } from "@/utils/classes";

const Home = function () {
  removeClass("body", "modalOpened");

  return (
    <div className="main-container">
      <CategoriesBlock />
      <GameCardsBlock urlAdress="/topgames" />
    </div>
  );
};

export default Home;
