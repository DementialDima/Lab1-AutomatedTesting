import { Selector } from 'testcafe';

fixture('Пошук товару').page('https://magento.softwaretestingboard.com');

test('має знайти товари "jacket"', async t => {
    await t
        .click('.search')
        .typeText('#search', 'jacket')
        .pressKey('enter')
        .expect(Selector('.product-item').count).gt(0);
});
