import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class TodoActions {
    static ADD_TODO: string = 'ADD_TODO';
    static TOGGLE_ALL_TODOS: string = 'TOGGLE_ALL_TODOS';
    static REMOVE_COMPLETED_TODOS: string = 'REMOVE_COMPLETED_TODOS';
    static TOGGLE_TODO: string = 'TOGGLE_TODO';
    static REMOVE_TODO: string = 'REMOVE_TODO';
    static UPDATE_TODO: string = 'UPDATE_TODO';
    static TOGGLE_TODO_EDITABLE: string = 'TOGGLE_TODO_EDITABLE';

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    addTodo(text: string): void {
        this.ngRedux.dispatch({
            type: TodoActions.ADD_TODO,
            payload: text,
        });
    }

    updateTodo(id: number, text: string): void {
        this.ngRedux.dispatch({
            type: TodoActions.UPDATE_TODO,
            payload: {
                id,
                text,
            }
        });
    }

    toggleEditable(id: number, editing: boolean): void {
        this.ngRedux.dispatch({
            type: TodoActions.TOGGLE_TODO_EDITABLE,
            payload: {
                id,
                editing,
            }
        });
    }

    toggleAllTodos(completed: boolean) {
        this.ngRedux.dispatch({
            type: TodoActions.TOGGLE_ALL_TODOS,
            payload: completed,
        });
    }

    toggleTodo(id: number, completed: boolean) {
        this.ngRedux.dispatch({
            type: TodoActions.TOGGLE_TODO,
            payload: {
                id,
                completed,
            }
        });
    }

    removeTodo(id: number) {
        this.ngRedux.dispatch({
            type: TodoActions.REMOVE_TODO,
            payload: {
                id
            }
        });
    }

    removeCompletedTodo() {
        this.ngRedux.dispatch({
            type: TodoActions.REMOVE_COMPLETED_TODOS
        });
    }
}
