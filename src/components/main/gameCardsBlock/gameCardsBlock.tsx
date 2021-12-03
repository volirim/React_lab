import cardsBlock from "./gameCards.module.scss";
import title from "../categoriesBlock/categories.module.scss";
import cardsBlockType from "@/types/cardsBlock";
import SplitCardsCategories from "@/utils/Cards";

const GameCardsBlock = function ({ cards, name, category }: cardsBlockType) {
  return (
    <div className={cardsBlock.container}>
      <div className={title.top}>
        <h3 className={title.title}>{category ? category.toUpperCase() : "Games"}</h3>
        <div className={title.line} />
      </div>
      <SplitCardsCategories cards={cards} name={name} category={category} />
    </div>
  );
};

export default GameCardsBlock;
