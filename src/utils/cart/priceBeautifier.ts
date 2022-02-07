const beautifyPrice = (price: number) => {
  const priceStringified = price.toString();

  if (priceStringified.includes(".")) {
    const pricesArray = priceStringified.split(".");
    const rightPart = pricesArray[1];
    if (rightPart) {
      return `${pricesArray[0]}.${pricesArray[1].slice(0, 2).padEnd(2, "0")}`;
    }
  }

  return `${price}.00`;
};

export default beautifyPrice;
