declare var require: any;

import { todoReducer } from './todo.reducer';
import { addTodo } from '../actions/todo.actions';

const deepFreeze = require('deep-freeze');

describe('reducer test', () => {

    it('should return initial state on unknown action type', () => {
        // arrange
        const initialState = [];

        // action
        const state = todoReducer([], {});

        // assert
        expect(state).toBe(initialState);
    });

    it('should add a first todo on the state', () => {
        // arrange
        const action = addTodo('writing unit test');
        const stateBefore = [];
        deepFreeze(stateBefore);

        // action
        const state = todoReducer(stateBefore, action);

        // assert
        expect(state.length).toEqual(1);
        expect(state[0].id).toEqual(1);
        expect(state[0].text).toEqual(action.payload);
    });
});
