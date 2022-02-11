import Search from "../components/Search/Search";
import GameCardsBlock from "../components/pages/products/GameCardsBlock/GameCardsBlock";
import CategoriesBlock from "../components/pages/products/Categories/Categories";
import { removeClass } from "@/utils/classes";
import styles from "./Home.module.scss";

const Home = function () {
  removeClass("body", "modalOpened");

  return (
    <div className="main-container">
      <div className={styles.searchBlockContainer}>
        <Search url="/topgames" />
      </div>
      <CategoriesBlock />
      <GameCardsBlock urlAdress="/topgames" />
    </div>
  );
};

export default Home;
