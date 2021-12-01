import GameCard from "../gameCard/gameCard";
import cardsBlock from "./gameCards.module.scss";
import title from "../categoriesBlock/categories.module.scss";
import ApiObject from "@/types/Mockapi";
import cardsBlockType from "@/types/cardsBlock";

const GameCardsBlock = function ({ cards, name, category }: cardsBlockType) {
  if (category) {
    return (
      <div className={cardsBlock.container}>
        <div className={title.top}>
          <h3 className={title.title}>{category}</h3>
          <div className={title.line} />
        </div>
        <div className={cardsBlock.bottom}>
          {cards
            .filter((element) => element.categories.includes(category))
            .map((element: ApiObject) => {
              if (element.name.toLowerCase().includes(name.toLowerCase())) {
                return <GameCard {...element} />;
              }
            })}
        </div>
      </div>
    );
  }
  return (
    <div className={cardsBlock.container}>
      <div className={title.top}>
        <h3 className={title.title}>Games</h3>
        <div className={title.line} />
      </div>
      <div className={cardsBlock.bottom}>
        {cards.map((element: ApiObject) => {
          if (element.name.toLowerCase().includes(name.toLowerCase())) {
            return <GameCard {...element} />;
          }
        })}
      </div>
    </div>
  );
};

export default GameCardsBlock;