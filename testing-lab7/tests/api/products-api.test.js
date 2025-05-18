const axios = require('axios');

test('Отримання головної сторінки', async () => {
  const res = await axios.get('https://magento.softwaretestingboard.com');
  expect(res.status).toBe(200);
});

test('Перевірка контенту сторінки', async () => {
  const res = await axios.get('https://magento.softwaretestingboard.com');
  expect(res.data).toContain('Magento');
});

test('404 помилка', async () => {
  try {
    await axios.get('https://magento.softwaretestingboard.com/non-existent');
  } catch (e) {
    expect(e.response.status).toBe(404);
  }
});

test('Час відповіді менше 2 секунд', async () => {
  const start = Date.now();
  await axios.get('https://magento.softwaretestingboard.com');
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(2000);
});

test('Відповідь у форматі HTML', async () => {
  const res = await axios.get('https://magento.softwaretestingboard.com');
  expect(res.headers['content-type']).toContain('text/html');
});