import { uniqueId } from 'lodash';
import expensesData from './expenses.data';
// Actions
export const ADD_EXPENSE = 'expenses/ADD_EXPENSE';
export const REMOVE_EXPENSE = 'expenses/REMOVE_EXPENSE';
export const EDIT_EXPENSE = 'expenses/EDIT_EXPENSE';

// Action Creators
export const addExpense = (expense) => ({ type: ADD_EXPENSE, expense });
export const removeExpense = id => ({ type: REMOVE_EXPENSE, id });
export const editExpense = (id, update) => ({ type: EDIT_EXPENSE, update, id });

const initialState = [
    ...expensesData
];

export default function expensesDuck(state = initialState, action) {
    switch (action.type) {
        case ADD_EXPENSE:
            return [{ id: uniqueId(), ...action.expense }, ...state];

        case REMOVE_EXPENSE:
            return state.filter(todo => todo.id !== action.id);

        case EDIT_EXPENSE:
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, ...action.update }
                    : todo
            );

        default:
            return state
    }
}
