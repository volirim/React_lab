function setStorageData(authorised: boolean) {
  localStorage.setItem("authorised", JSON.stringify(authorised));
  return JSON.parse(localStorage.getItem("authorised")!);
}

export default setStorageData;
