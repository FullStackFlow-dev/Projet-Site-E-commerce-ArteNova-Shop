function formatPrice(amount) {
  return amount.toLocaleString("fr-FR") + "\u00A0FCFA";
}

module.exports = formatPrice;