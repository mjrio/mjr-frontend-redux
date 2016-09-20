import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

import { TodoActions } from './actions/todo.actions';
import { ITodos } from './store/todo.reducer';
import { filterTodos } from './store/filter.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    todos: ITodos = [];
    todos$: any;

    constructor(private ngRedux: NgRedux<IAppState>, private actions: TodoActions) {
        ngRedux.connect(this.mapStateToTarget, null)(this);
    }

    mapStateToTarget(state: IAppState) {
        const filteredTodos =  filterTodos(state.todos, state.filter.key);
        return { todos: filteredTodos };
    }

    addTodo($event) {
        this.actions.addTodo($event);
    }
}


