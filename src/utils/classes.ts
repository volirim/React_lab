function setClass(selector: string, classes: string) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const element = document.querySelector(selector)!;
  return element.classList.add(classes);
}

function removeClass(selector: string, classes: string) {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const element = document.querySelector(selector)!;
  return element.classList.remove(classes);
}

export { setClass, removeClass };
