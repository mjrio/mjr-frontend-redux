import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';

import { FilterActions } from './actions/filter.actions';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer">
        <span class="todo-count"><strong>{{remainingTodosCount}}</strong> items left</span>
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                <li>
                    <a ng-class="{selected: currentFilterKey === 'SHOW_ALL_TODOS'}" href="#" (click)="showAllTodos()">All</a>
                </li>
                <li>
                    <a ng-class="{selected: currentFilterKey === 'SHOW_ACTIVE_TODOS'}" href="#" (click)="showActiveTodos()">Active</a>
                </li>
                <li>
                    <a ng-class="{selected: currentFilterKey === 'SHOW_COMPLETED_TODOS'}" href="#" (click)="showCompletedTodos()">Completed</a>
                </li>
            </ul>
            <button class="clear-completed" (click)="clearCompletedTodos()">Clear completed</button>
        </footer>
  `,
})
export class AppFooterComponent implements OnInit {

    constructor(private ngRedux: NgRedux<IAppState>, private actions: FilterActions) {
        ngRedux.connect(this.mapStateToTarget, null)(this);
    }

    mapStateToTarget(state: IAppState) {
        const remainingTodos = state.todos.filter(todo => !todo.completed);
        const currentFilterKey = state.filter.key;
        return {
            currentFilterKey,
            remainingTodosCount: remainingTodos.length,
        };
    }

    ngOnInit() {
    }

    showAllTodos() {
        this.actions.showAllTodos();
        console.log('showAllTodos');
    }

    showActiveTodos() {
        this.actions.showActiveTodos();
    }

    showCompletedTodos() {
        this.actions.showCompletedTodos();
    }

    clearCompletedTodos() {
        this.actions.clearCompletedTodos();
    }
}
