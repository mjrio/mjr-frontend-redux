import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <section class="header">
            <form>
                <h1>ng2-redux</h1>
                <input class="new-todo" name="new-todo" placeholder="What needs to be done?" autofocus [(ngModel)]="newTodoText" (keyup.enter)="addTodo()">
            </form>
        </section>
  `,
})
export class AppHeaderComponent implements OnInit {
    newTodoText: string;
    @Output() todoAdded = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    addTodo() {
        this.todoAdded.emit(this.newTodoText);
        this.newTodoText = null;
    }

}
