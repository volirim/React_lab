import GameCard from "@/components/main/gameCard/gameCard";
import cardsBlockType from "@/types/cardsBlock";
import GameCardType from "@/types/Mockapi";
import cardsBlock from "../components/main/gameCardsBlock/gameCards.module.scss";

const SplitCardsCategories = function ({ cards, name, category }: cardsBlockType) {
  if (category) {
    return (
      <div className={cardsBlock.gameCards}>
        {cards
          .filter((element) => element.categories.includes(category))
          .map((element: GameCardType) => {
            if (element.name.toLowerCase().includes(name.toLowerCase())) {
              return <GameCard {...element} />;
            }
          })}
      </div>
    );
  }
  return (
    <div className={cardsBlock.gameCards}>
      {cards.map((element: GameCardType) => {
        if (element.name.toLowerCase().includes(name.toLowerCase())) {
          return <GameCard {...element} />;
        }
      })}
    </div>
  );
};

export default SplitCardsCategories;
