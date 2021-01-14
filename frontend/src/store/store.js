import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'


import { itemReducer } from './reducers/itemReducer.js';
import { userReducer } from './reducers/userReducer';
import { reviewReducer } from './reducers/reviewReducer';

const rootReducer = combineReducers({
    itemModule: itemReducer,
    userModule: userReducer,
    reviewModule: reviewReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
