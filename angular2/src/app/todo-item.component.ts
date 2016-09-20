import { Component, Input, OnInit } from '@angular/core';
import { TodoActions } from './actions/todo.actions';
import { Todo } from './store/todo.reducer';

@Component({
    selector: 'todo-item',
    template: `
        <li [ngClass]="todo">
            <div class="view">
                <input class="toggle" type="checkbox" (change)="toggleCompleted($event)" [checked]="todo.completed">
                <label (dblclick)="toggleEditable($event)">{{todo.text}}</label>
                <button class="destroy" (click)="remove()"></button>
            </div>
            <input #editedtodo
                   class="edit"
                   [value]="todo.text"
                   (blur)="stopEditing(editedtodo.value)"
                   (keyup.enter)="updateEditingTodo(editedtodo.value)"
                   (keyup.escape)="cancelEditingTodo()">
        </li>
    `,
})
export class TodoItemComponent implements OnInit {
    @Input() todo: Todo;

    constructor(private actions: TodoActions ) { }

    ngOnInit() {
    }

    toggleEditable() {
        this.actions.toggleEditable(this.todo.id, !this.todo.editing);
    }

    stopEditing(editedTitle: string) {
        if (!this.todo.editing) {
            return;
        }
        this.actions.updateTodo(this.todo.id, editedTitle);
    }

    updateEditingTodo(editedTitle: string) {
        this.actions.updateTodo(this.todo.id, editedTitle);
        this.todo.editing = false;
    }

    cancelEditingTodo() {
        this.actions.toggleEditable(this.todo.id, false);
        this.todo.editing = false;
    }

    toggleCompleted($event) {
        this.actions.toggleTodo(this.todo.id, $event.target.checked);
    }

    remove() {
        this.actions.removeTodo(this.todo.id);
    }

}
