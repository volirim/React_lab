import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "../components/UI/Search/Search";
import GameCardsBlock from "../components/pages/products/GameCardsBlock/GameCardsBlock";
import styles from "./Products.module.scss";
import FilterBlock from "@/components/pages/products/Filter/FilterBlock/FilterBlock";
import { StoreInterface } from "@/store/modules/reducersCombined";
import { isAdminSelector } from "../store/modules/userProfile/selectors";

const Products: React.FC = function () {
  const { platform } = useParams();
  const store = useSelector((state: StoreInterface) => state);
  const isAdmin = isAdminSelector(store);

  return (
    <div className={styles.mainContainer}>
      <FilterBlock category={platform} />
      <div className={styles.gamesBlock}>
        <div className={styles.searchBlock}>
          <Search category={platform} url="/games" />

          {isAdmin ? (
            <Link to="?modal=editGameCard" className="createGameCardButton">
              add Game
            </Link>
          ) : null}
        </div>

        <GameCardsBlock category={platform} />
      </div>
    </div>
  );
};

export default Products;
