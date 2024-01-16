export const formatPrice = (price: number): string => {
    if (price >= 100000) {
      return `Rp. ${price / 1000}K`;
    } else if (price >= 1000) {
      return `Rp. ${price / 1000}K`;
    } else {
      return `Rp. ${price}`;
    }
  };

  export const formatDiamond = (diamond: number): string => {
    if (diamond >= 100000) {
      return `${diamond / 1000}.K`;
    } else if (diamond >= 1000) {
      return `${diamond / 1000}.K`;
    } else {
      return `${diamond}`;
    }
  };