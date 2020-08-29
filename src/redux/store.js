// import { configureStore } from '@reduxjs/toolkit';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import {rootReducer} from "./reduces";

export const store = createStore(
    rootReducer,
    // {domain:{},app:{isLoading:{films:undefined}}},
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

);
