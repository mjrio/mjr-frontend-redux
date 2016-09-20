import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class FilterActions {

    static SHOW_ALL_TODOS: string = 'SHOW_ALL_TODOS';
    static SHOW_ACTIVE_TODOS: string = 'SHOW_ACTIVE_TODOS';
    static SHOW_COMPLETED_TODOS: string = 'SHOW_COMPLETED_TODOS';
    static REMOVE_COMPLETED_TODOS: string = 'REMOVE_COMPLETED_TODOS';

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    showAllTodos(): void {
        this.ngRedux.dispatch({
            type: FilterActions.SHOW_ALL_TODOS,
        });
    }

    showActiveTodos(): void {
        this.ngRedux.dispatch({
            type: FilterActions.SHOW_ACTIVE_TODOS,
        });
    }
    showCompletedTodos(): void {
        this.ngRedux.dispatch({
            type: FilterActions.SHOW_COMPLETED_TODOS,
        });
    }

    clearCompletedTodos(): void {
        this.ngRedux.dispatch({
            type: FilterActions.REMOVE_COMPLETED_TODOS,
        });
    }

}
