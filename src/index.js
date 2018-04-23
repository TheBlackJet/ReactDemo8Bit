import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import App from "./components/App";
import Home from "./components/Home";
/* Import Components */

/* Router import */


/* Style Import */
import "./styles/bootstrap/bootstrap.scss"
import './styles/app.scss';




const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
const store = createStore(rootReducer, enhancer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("nfq"));