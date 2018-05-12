import { getExpensesTotalAmount } from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = getExpensesTotalAmount([]);
    expect(res).toBe(0);
});

test('should add up expense amount', () => {
    const res = getExpensesTotalAmount([expenses[0]]);
    expect(res).toBe(299.95);
});

test('should add up multiple expenses amount', () => {
    const res = getExpensesTotalAmount(expenses);
    expect(res).toBe(314.59);
});