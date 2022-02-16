const hideButton = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
  const target = event.target as Element;
  target.classList.add("hidden");
  setTimeout(() => target.classList.remove("hidden"), 300);
};

export default hideButton;
