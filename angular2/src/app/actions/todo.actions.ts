
/*
    action TYPES
*/

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS';
export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const TOGGLE_TODO_EDITABLE = 'TOGGLE_TODO_EDITABLE';

/*
    action creators
*/

export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: text,
});

export const updateTodo = (id: number, text: string) => ({
    type: UPDATE_TODO,
    payload: {
        id,
        text,
    }
});

export const toggleEditable = (id: number, editing: boolean) => ({
    type: TOGGLE_TODO_EDITABLE,
    payload: {
        id,
        editing,
    }
});

export const toggleAllTodos = (completed: boolean) => ({
    type: TOGGLE_ALL_TODOS,
    payload: completed,
});

export const toggleTodo = (id: number, completed: boolean) => ({
    type: TOGGLE_TODO,
    payload: {
        id,
        completed,
    }
});

export const removeTodo = (id: number) => ({
    type: REMOVE_TODO,
    payload: {
        id
    }
});

export const removeCompletedTodo = () => ({
    type: REMOVE_COMPLETED_TODOS
});
