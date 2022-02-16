import Search from "../components/UI/Search/Search";
import GameCardsBlock from "../components/pages/products/GameCardsBlock/GameCardsBlock";
import CategoriesBlock from "../components/pages/products/Categories/Categories";
import styles from "./Home.module.scss";
import { ENDPOINTS } from "@/constants/mockapiURL";

const Home = function () {
  return (
    <div className="main-container">
      <div className={styles.searchBlockContainer}>
        <Search url={ENDPOINTS.topGames} />
      </div>
      <CategoriesBlock />
      <GameCardsBlock urlAdress="/topgames" />
    </div>
  );
};

export default Home;
