import { combineReducers } from 'redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';

//reducer import
import { addJobReducer, getAllJobsReducer } from './reducers/jobReducers';
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './reducers/userReducer'

const finalReducer = combineReducers({
    getAllJobsReducer : getAllJobsReducer,
    registerUserReducer : registerUserReducer,
    loginUserReducer: loginUserReducer,
    addJobReducer : addJobReducer,
    getAllUsersReducer : getAllUsersReducer
});


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initalState = {
    loginUserReducer: {
        currentUser: currentUser
    }
}


const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initalState, composeEnhancers(applyMiddleware(thunk)))

export default store;