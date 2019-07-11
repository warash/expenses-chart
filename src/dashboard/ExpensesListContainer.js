import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addExpense, editExpense, removeExpense } from '../store/expenses.duck'
import CostsLists from './CostsList'
import { getExpenses } from '../store'

const mapStateToProps = state => ({
    costs: getExpenses(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ edit: editExpense, add: addExpense, remove: removeExpense }, dispatch)
});

const ExpensesListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CostsLists);

export default ExpensesListContainer
