function formatPrice(amount) {
  const formatter = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XOF"
  });
  return formatter.format(amount);
}

module.exports = formatPrice;
