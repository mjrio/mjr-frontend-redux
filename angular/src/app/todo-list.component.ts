import { Component, OnInit, Input } from '@angular/core';
import { TodoActions } from './actions/todo.actions';
import { Todo } from './store/todo.reducer';

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

    constructor(private actions: TodoActions) { }

    ngOnInit() {
    }

    toggleAll($event) {
        console.log('toggleAll', $event.target.checked);
        this.actions.toggleAllTodos($event.target.checked);
    }

}
