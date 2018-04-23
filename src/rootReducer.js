import { combineReducers } from 'redux';
import { appState } from './reducers/app';

const rootReducer = combineReducers({
    appState,
});

export default rootReducer;