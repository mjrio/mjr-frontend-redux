import {
    ADD_TODO,
    UPDATE_TODO,
    TOGGLE_TODO,
    TOGGLE_ALL_TODOS,
    REMOVE_TODO,
    REMOVE_COMPLETED_TODOS,
    TOGGLE_TODO_EDITABLE,
 } from '../actions/todo.actions';

export class Todo {
    editing = false;

    constructor(public id: number, public text: string, public completed = false) { }
}

export type ITodos = Todo[];

const INITIAL_STATE = [];

export function todoReducer(state: ITodos = INITIAL_STATE, action: any) {
    switch (action.type) {
        case ADD_TODO:
            const newId = state.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1;
            return [
                ...state,
                new Todo(newId, action.payload)
            ];
        case UPDATE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id ?
                Object.assign({}, todo, action.payload, { editing: false }) : todo);
        case TOGGLE_TODO:
            return state.map(todo =>
                todo.id === action.payload.id ?
                Object.assign({}, todo, action.payload) : todo);
        case TOGGLE_ALL_TODOS:
            return state.map(todo => {
                return Object.assign({}, todo, {
                    completed: action.payload,
                });
            });
        case TOGGLE_TODO_EDITABLE:
            return state.map(todo =>
                todo.id === action.payload.id ?
                Object.assign({}, todo, action.payload) : todo);
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        case REMOVE_COMPLETED_TODOS:
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}
