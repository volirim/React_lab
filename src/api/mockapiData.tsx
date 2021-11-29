const getGamesData = function () {
  return fetch("https://61a36f44d5e8330017292010.mockapi.io/games").then((response) => response.json());
};

export default getGamesData;
