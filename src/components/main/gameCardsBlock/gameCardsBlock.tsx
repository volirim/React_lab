import cardsBlock from "./gameCards.module.scss";
import title from "../categoriesBlock/categories.module.scss";
import cardsBlockType from "@/types/cardsBlock";
import FilterCategories from "@/utils/CategoryFilter";

const GameCardsBlock = function ({ cards, category }: cardsBlockType) {
  return (
    <div className={cardsBlock.container}>
      <div className={title.top}>
        <h3 className={title.title}>{category ? category.toUpperCase() : "Games"}</h3>
        <div className={title.line} />
      </div>
      <div className={cardsBlock.gameCards}>
        <FilterCategories cards={cards} category={category} />
      </div>
    </div>
  );
};

export default GameCardsBlock;
