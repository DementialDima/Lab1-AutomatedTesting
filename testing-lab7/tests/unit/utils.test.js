const parsePrice = str => parseFloat(str.replace('$', '').replace(',', ''));

test('Парсинг ціни', () => {
  expect(parsePrice('$1,299.99')).toBe(1299.99);
});

test('Парсинг нуля', () => {
  expect(parsePrice('$0')).toBe(0);
});

test('Парсинг дробової ціни', () => {
  expect(parsePrice('$59.95')).toBe(59.95);
});

test('Парсинг з пробілами', () => {
  expect(parsePrice('  $99  ')).toBe(99);
});

test('Неправильний ввід', () => {
  expect(isNaN(parsePrice('not-a-price'))).toBe(true);
});