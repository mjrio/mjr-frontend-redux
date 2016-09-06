import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="footer">
        <span class="todo-count"><strong>3</strong> items left</span>
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

    constructor() { }

    ngOnInit() {
    }

    showAllTodos() {
        console.log('showAllTodos');
    }

    showActiveTodos() {
        console.log('showActiveTodos');
    }

    showCompletedTodos() {
        console.log('showCompletedTodos');
    }

    clearCompletedTodos() {
        console.log('clearCompletedTodos');
    }
}
