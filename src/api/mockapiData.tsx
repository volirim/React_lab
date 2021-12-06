const getGamesData = function (path: string) {
  return fetch(`https://61a36f44d5e8330017292010.mockapi.io/${path}`).then((response) => response.json());
};

export default getGamesData;
