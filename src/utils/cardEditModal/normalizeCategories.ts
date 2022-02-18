interface CategoriesInterface {
  pc?: boolean;
  playstation?: boolean;
  xbox?: boolean;
}

function normilizeGenres(categoriesObject: CategoriesInterface) {
  const genresArray = Object.entries(categoriesObject);
  const newArray = genresArray.reduce((previous: string[], value: [string, boolean]) => {
    if (value[1]) {
      previous.push(value[0]);
      return previous;
    }
    return previous;
  }, []);

  return newArray;
}

export default normilizeGenres;
