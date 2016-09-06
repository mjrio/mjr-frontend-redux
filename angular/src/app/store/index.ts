
import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import { ITodos, todoReducer } from './todo.reducer';
import { filterReducer } from './filter.reducer';

const createLogger = require('redux-logger');

export interface IAppState {
    counter?: number;
    todos?: ITodos;
};

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  todos: todoReducer,
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

