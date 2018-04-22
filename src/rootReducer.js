import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { appState } from './reducers/app';

const rootReducer = combineReducers({
    appState,
    routing: routerReducer
});

export default rootReducer;