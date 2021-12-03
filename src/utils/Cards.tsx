import GameCard from "@/components/main/gameCard/gameCard";
import cardsBlockType from "@/types/cardsBlock";
import GameCardType from "@/types/Mockapi";
import cardsBlock from "../components/main/gameCardsBlock/gameCards.module.scss";

const SplitCardsCategories = function ({ cards, name, category }: cardsBlockType) {
  function mappedArray(array: GameCardType[]) {
    return array.map((element: GameCardType) => {
      if (element.name.toLowerCase().includes(name.toLowerCase())) {
        return <GameCard {...element} />;
      }
    });
  }

  if (category) {
    return (
      <div className={cardsBlock.gameCards}>
        {mappedArray(cards.filter((element) => element.categories.includes(category)))}
      </div>
    );
  }
  return <div className={cardsBlock.gameCards}>{mappedArray(cards)}</div>;
};

export default SplitCardsCategories;
