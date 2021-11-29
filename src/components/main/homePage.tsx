import "./mainPage.scss";
import GameCardsBlock from "./gameCardsBlock/gameCardsBlock";

const Home: React.FC = function () {
  return (
    <div className="main-container">
      <GameCardsBlock />
    </div>
  );
};

export default Home;
