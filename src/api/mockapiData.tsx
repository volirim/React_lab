import GameCardType from "@/types/Mockapi";

const getGamesData = function (setCard: React.Dispatch<React.SetStateAction<GameCardType[] | never[]>>, path: string) {
  return fetch(`https://61a36f44d5e8330017292010.mockapi.io/${path}`)
    .then((response) => response.json())
    .then((response) => setCard(response));
};

export default getGamesData;
