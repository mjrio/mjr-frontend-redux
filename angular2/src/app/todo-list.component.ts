import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from 'ng2-redux';


import { Todo } from './store/todo.reducer';
import { toggleAllTodos } from './actions/todo.actions';
import { IAppState } from './store';

@Component({
    selector: 'todo-list',
    template: `
        <section class="main">
            <input class="toggle-all" type="checkbox" (change)="toggleAll($event)">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <todo-item *ngFor="let todo of todos" [todo]="todo"></todo-item>
            </ul>
        </section>
  `,
})
export class TodoListComponent implements OnInit {

    @Input() todos: Todo[];

    constructor(private ngRedux: NgRedux<IAppState>) { }

    ngOnInit() {
    }

    toggleAll($event) {
        this.ngRedux.dispatch(toggleAllTodos($event.target.checked));
    }

}
