// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hideButton = (event: any) => {
  event.target.classList.add("hidden");
  setTimeout(() => event.target.classList.remove("hidden"), 300);
};

export default hideButton;
