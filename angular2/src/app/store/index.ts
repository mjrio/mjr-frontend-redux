declare var require: any;

import { combineReducers } from 'redux';
import { ITodos, todoReducer } from './todo.reducer';
import { filterReducer } from './filter.reducer';

const createLogger = require('redux-logger');

export interface IAppState {
    counter?: number;
    todos?: ITodos;
    filter?: any;
};

// this is the root state
export const rootReducer = combineReducers<IAppState>({
  todos: todoReducer,
  filter: filterReducer,
});

/*
    redux middleware
*/
export const middleware = [
    createLogger({ level: 'info', collapsed: false })
    //
    // add your redux middleware here
    //
];

/*
    redux enhancers
*/
export const enhancers = [
    //
    // add your redux enhancers here
    //
];
