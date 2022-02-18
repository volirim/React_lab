// eslint-disable-next-line @typescript-eslint/ban-types
function debounce(func: Function, timeout = 300) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply({}, args);
    }, timeout);
  };
}

export default debounce;
