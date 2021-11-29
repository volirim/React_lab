import "./mainPage.scss";
import GameCardsBlock from "./gameCardsBlock/gameCardsBlock";
import CategoriesBlock from "./categoriesBlock/categories";

const Home: React.FC = function () {
  return (
    <div className="main-container">
      <CategoriesBlock />
      <GameCardsBlock />
    </div>
  );
};

export default Home;
