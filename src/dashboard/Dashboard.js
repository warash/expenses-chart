import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ExpensesList from './ExpensesListContainer';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/expenses"/>}/>
                <Route path="/expenses" component={ExpensesList}/>
            </Switch>
        </BrowserRouter>
    )
}
