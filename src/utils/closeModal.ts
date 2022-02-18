import { NavigateFunction } from "react-router";

const closeModal = (search: string, navigate: NavigateFunction) => {
  const urlParams = new URLSearchParams(search);
  urlParams.delete("modal");
  return navigate(urlParams.toString());
};

export default closeModal;
