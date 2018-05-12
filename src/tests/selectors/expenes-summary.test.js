import { getExpensesTotalCount } from '../../selectors/expenses';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('get a sum of 0 when none expenses are shown', () => {
    const res = getExpensesTotalCount([]);
    expect(res).toBe(0);
});

test('get a sum of all the shown expenses', () => {
    const res = getExpensesTotalCount(expenses);
    expect(res).toBe(3);
});