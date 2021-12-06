import cardsBlock from "./gameCards.module.scss";
import title from "../categoriesBlock/categories.module.scss";
import cardsBlockType from "@/types/cardsBlock";
import splitCards from "@/utils/splitCards";
import GameCard from "../gameCard/gameCard";

const GameCardsBlock = function ({ cards, name, category }: cardsBlockType) {
  return (
    <div className={cardsBlock.container}>
      <div className={title.top}>
        <h3 className={title.title}>{category ? category.toUpperCase() : "Games"}</h3>
        <div className={title.line} />
      </div>
      <div className={cardsBlock.gameCards}>
        {splitCards(cards, name, category).map((element) => (
          <GameCard {...element} />
        ))}
      </div>
    </div>
  );
};

export default GameCardsBlock;
