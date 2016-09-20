/* global require */

import { combineReducers } from 'redux';
import { ITodos, todoReducer } from './todo.reducer';
import { filterReducer } from './filter.reducer';

import * as createLogger from 'redux-logger';

export interface IAppState {
    counter?: number;
    todos?: ITodos;
    filter?: any;
};

export const rootReducer = combineReducers<IAppState>({
  todos: todoReducer,
  filter: filterReducer,
});

export const middleware = [
    // add your redux middleware here
    createLogger({
        level: 'info',
        collapsed: true,
    })
];

export const enhancers = [
    // add your redux enhancers here
];

