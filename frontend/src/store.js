import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

//reducer import
import { getAllJobsReducer } from './reducers/jobReducers';
import { registerUserReducer } from './reducers/userReducer'

const finalReducer = combineReducers({
    getAllJobsReducer : getAllJobsReducer,
    registerUserReducer : registerUserReducer
});

const initalState = {}


const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initalState, composeEnhancers(applyMiddleware(thunk)))

export default store;