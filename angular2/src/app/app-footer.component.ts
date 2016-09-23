declare var require: any;

import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { bindActionCreators } from 'redux';

// 'import * as FilterActions' won't provide the right type for bindActionCreators.
const FilterActions = require('./actions/filter.actions');

// import { FilterActions } from './actions/filter.actions';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer">
        <span class="todo-count"><strong>{{remainingTodosCount}}</strong> items left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                <li>
                    <a ng-class="{selected: currentFilterKey === 'SHOW_ALL_TODOS'}"
                       href="#" (click)="actions.showAllTodos()">
                       All
                    </a>
                </li>
                <li>
                    <a ng-class="{selected: currentFilterKey === 'SHOW_ACTIVE_TODOS'}"
                       href="#" (click)="actions.showActiveTodos()">
                       Active
                    </a>
                </li>
                <li>
                    <a ng-class="{selected: currentFilterKey === 'SHOW_COMPLETED_TODOS'}"
                       href="#" (click)="actions.showCompletedTodos()">
                       Completed
                    </a>
                </li>
            </ul>
            <button class="clear-completed" (click)="actions.clearCompletedTodos()">
                Clear completed
            </button>
        </footer>
  `,
})
export class AppFooterComponent implements OnInit {

    constructor(private ngRedux: NgRedux<IAppState>) {
        ngRedux.connect(this.mapStateToTarget, this.mapDispatchToThis)(this);
    }

    mapStateToTarget(state: IAppState) {
        const remainingTodos = state.todos.filter(todo => !todo.completed);
        const currentFilterKey = state.filter.key;
        return {
            currentFilterKey,
            remainingTodosCount: remainingTodos.length,
        };
    }

    mapDispatchToThis(dispatch) {
        return { actions: bindActionCreators(FilterActions, dispatch) };
    }

    ngOnInit() {
    }
}
