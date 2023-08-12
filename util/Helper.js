export const firebDateToShorty = (date) => {
  if (date == null || date == "") return "invalid date";
  return new Date(date).toLocaleDateString("en-US");
};

export const formatNumber = (number) => {
  if (number == null) return "invalid number";
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return numberWithCommas(number);
  }
};
