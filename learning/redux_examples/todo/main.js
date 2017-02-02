import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';
import { addTodo, toggleTodo, setVisibilityFilter } from './actions';

let store = createStore(todoApp);

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Need to sleep'));
store.dispatch(addTodo('Need to finish breakfast'));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter('SHOW_COMPLETED'));

store.dispatch(addTodo('I want to sleep'));

// Stop listening to state updates
unsubscribe();

/*
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
*/