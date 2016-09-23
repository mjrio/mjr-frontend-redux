import { ADD_TODO, addTodo } from './todo.actions';

describe('todo.actions', () => {

    it('should work', () => {
        const action = addTodo('writing text');
        expect(action.type).toEqual(ADD_TODO);
        expect(action.payload).toEqual('writing text');
    });

});
