declare var require: any;

import { todoReducer } from './todo.reducer';
import { addTodo, removeTodo } from '../actions/todo.actions';

const deepFreeze = require('deep-freeze');

describe('reducer test', () => {

    it('should return initial state on unknown action type', () => {
        // arrange
        const initialState = [];

        // action
        const stateAfter = todoReducer([], {});

        // assert
        expect(stateAfter).toBe(initialState);
    });

    it('should add a first todo on the state', () => {
        // arrange
        const action = addTodo('writing unit test');
        const stateBefore = [];
        deepFreeze(stateBefore);

        // action
        const stateAfter = todoReducer(stateBefore, action);

        // assert
        expect(stateAfter.length).toEqual(1);
        expect(stateAfter[0].id).toEqual(1);
        expect(stateAfter[0].text).toEqual(action.payload);
    });

    it('should remove a todo from the state', () => {
        // arrange
        const action = removeTodo(1);
        const stateBefore = [
            { id: 1, text: 'writing code', editing: false, completed: false },
            { id: 2, text: 'drinking beer', editing: false, completed: true }
        ];
        deepFreeze(stateBefore);

        // action
        const stateAfter = todoReducer(stateBefore, action);

        // assert
        expect(stateAfter.length).toEqual(1);
        expect(stateAfter[0].id).toEqual(1);
    });
});
