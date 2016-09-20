import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

import { TodoActions } from './actions/todo.actions';
import { ITodos } from './store/todo.reducer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    todos: ITodos = [];

    constructor(private ngRedux: NgRedux<IAppState>, private actions: TodoActions) {
        ngRedux.connect(this.mapStateToTarget, null)(this);
    }

    mapStateToTarget(state: IAppState) {
        const filteredTodos =  state.todos.filter(state.filter.predicate);
        return { todos: filteredTodos };
    }

    addTodo($event) {
        this.actions.addTodo($event);
    }
}

// ngRedux select pattern
// import { Observable } from 'rxjs';
// import { NgRedux, select } from 'ng2-redux';
// @select() todos$: Observable<ITodos>;


