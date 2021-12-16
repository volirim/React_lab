import GameCard from "@/components/main/gameCard/GameCard";
import cardsBlockType from "@/types/cardsBlock";

const FilterCategories = function ({ cards, category }: cardsBlockType) {
  if (category) {
    const newArray = cards.filter((element) => element.categories.includes(category));
    return (
      <>
        {newArray.map((element) => (
          <GameCard {...element} />
        ))}
      </>
    );
  }
  return (
    <>
      {cards.map((element) => (
        <GameCard {...element} />
      ))}
    </>
  );
};

export default FilterCategories;
