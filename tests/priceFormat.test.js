const formatPrice = require('../src/utils/priceFormat');

test('formatte correctement un prix en FCFA', () => {
  expect(formatPrice(12500)).toBe("12 500 FCFA");
});

test('formatte correctement un petit montant', () => {
  expect(formatPrice(500)).toBe("500 FCFA");
});

test('formatte correctement un montant élevé', () => {
  expect(formatPrice(1000000)).toBe("1 000 000 FCFA");
});
