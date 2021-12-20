import MOCK_API_URL from "@/constants/mockapiURL";

const getGamesData = function (path: string) {
  return fetch(`${MOCK_API_URL}${path}`).then((response) => response.json());
};

export default getGamesData;
