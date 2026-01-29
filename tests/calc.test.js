const calcTotal = require('../utils/calc');

test('calcule le total avec TVA en FCFA', () => {
  // Exemple : prix de 10 000 FCFA avec TVA 18%
  expect(calcTotal(10000, 0.18)).toBe(11800);
});

test('calcule le total sans TVA', () => {
  // Exemple : prix de 5 000 FCFA avec TVA 0%
  expect(calcTotal(5000, 0)).toBe(5000);
});

test('calcule le total avec TVA réduite', () => {
  // Exemple : prix de 20 000 FCFA avec TVA 10%
  expect(calcTotal(20000, 0.10)).toBe(22000);
});
