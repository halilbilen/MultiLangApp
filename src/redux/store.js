import { combineReducers } from 'redux';
import LanguageReducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

export const reducers = combineReducers({
    language: LanguageReducer,
});


export const store = createStore(reducers, applyMiddleware(thunk));