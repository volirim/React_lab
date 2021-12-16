function setClass(selector: string, classes: string) {
  const element = document.querySelector(selector)!;
  return element.classList.add(classes);
}

function removeClass(selector: string, classes: string) {
  const element = document.querySelector(selector)!;
  return element.classList.remove(classes);
}

export { setClass, removeClass };
