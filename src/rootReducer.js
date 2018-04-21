import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    appState : {},
    routing: routerReducer
});

export default rootReducer;