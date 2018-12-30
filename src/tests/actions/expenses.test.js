import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should set up edit expense action object', () => {
    const action = editExpense('1234abcd',{ note: 'Changed Note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234abcd',
        updates: {
            note: 'Changed Note'
        }
    });
});

test('Should set up add expense action object with values', () => {
    const expenseData = {
        description: 'Rent',
        amount: '109500',
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should set up add expense action object with default options', () => {
    const expenseData = {
        
    };

    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note: '',
            id: expect.any(String)
        }
    });
});