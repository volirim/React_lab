import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Search from "../components/Search/Search";
import GameCardsBlock from "../components/pages/products/GameCardsBlock/GameCardsBlock";
import styles from "./Products.module.scss";
import FilterBlock from "@/components/pages/products/Filter/FilterBlock/FilterBlock";

const Products: React.FC = function () {
  const { platform } = useParams();

  return (
    <div className={styles.mainContainer}>
      <FilterBlock />
      <div className={styles.gamesBlock}>
        <div className={styles.searchBlock}>
          <Search category={platform} url="/games" />
          <Link to="?modal=editGameCard" className="createGameCardButton">
            add Game
          </Link>
        </div>

        <GameCardsBlock category={platform} />
      </div>
    </div>
  );
};

export default Products;
