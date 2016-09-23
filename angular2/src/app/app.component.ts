declare var require: any;

import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { bindActionCreators } from 'redux';

import { ITodos } from './store/todo.reducer';
import { filterTodos } from './store/filter.reducer';

// 'import * as TodoActions' won't provide the right type for bindActionCreators.
const TodoActions = require('./actions/todo.actions');

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    todos: ITodos = [];
    todos$: any;

    constructor(private ngRedux: NgRedux<IAppState>) {
        ngRedux.connect(this.mapStateToTarget, this.mapDispatchToThis)(this);
    }

    mapStateToTarget(state: IAppState) {
        const filteredTodos =  filterTodos(state.todos, state.filter.key);
        return { todos: filteredTodos };
    }

    // bind all action creator to the actions property on the this
    // Otherwise you have to write the following:
    //
    // mapDispatchToThis(dispatch) {
    //     Object.Assign(this, {
    //         actions: {
    //             addTodo(text: string) {
    //                 this.redux.dispatch(TodoActions.addTodo(text))
    //             }
    //             updateTodo(id: number, text: string) {
    //                 this.redux.dispatch(TodoActions.id: number, text: string(id, text))
    //             }
    //             ...
    //         }
    //     })
    // }
    mapDispatchToThis(dispatch) {
        return { actions: bindActionCreators(TodoActions, dispatch) };
    }
}


