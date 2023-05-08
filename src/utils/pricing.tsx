export const getPrice = (price, discount) => {
  return price - discount;
};

export const showOriginal = (price, discount) => {
  if (discount > 0) {
    return price;
  }
};
