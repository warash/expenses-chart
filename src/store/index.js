import { combineReducers } from 'redux'
import expensesDuck from './expenses.duck'


const rootReducer = combineReducers({
    expenses: expensesDuck,
});

export default rootReducer

export const getExpenses = state => state.expenses;