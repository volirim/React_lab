import cardsBlockStyles from "./GameCards.module.scss";
import titleStyles from "../Categories/Categories.module.scss";
import cardsBlockType from "@/types/cardsBlock";
import filterCategories from "@/utils/categoryFilter";
import GameCard from "../GameCard/GameCard";

const GameCardsBlock = function ({ cards, category }: cardsBlockType) {
  return (
    <div className={cardsBlockStyles.container}>
      <div className={titleStyles.top}>
        <h3 className={titleStyles.title}>{category ? category.toUpperCase() : "Games"}</h3>
        <div className={titleStyles.line} />
      </div>
      <div className={cardsBlockStyles.gameCards}>
        {filterCategories(cards, category).map((element) => (
          <GameCard {...element} />
        ))}
      </div>
    </div>
  );
};

export default GameCardsBlock;
