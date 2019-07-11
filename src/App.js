import React from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store'

const store = createStore(reducer);


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Dashboard/>
            </div>
        </Provider>
    );
}

export default App;
