import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';


/*
    You can also place the actions in a Angular2 service and use
    any Angular2 dependency
*/

@Injectable()
export class AsyncActions {
    constructor(private ngRedux: NgRedux<IAppState>, private http: Http) {
    }

    // sample async action
    addTodoAsync(id: number, text: string): void {

        // initiate request
        this.ngRedux.dispatch({
            type: ADD_TODO_REQUEST
        });

        // do request
        this.http.post('http://localhost/api/todos', { id, text })
            .subscribe(
                result => {
                    // successfull result
                    this.ngRedux.dispatch({
                        type: ADD_TODO_SUCCESS,
                        payload: result,
                    });
                },
                err => {
                    // error result
                    this.ngRedux.dispatch({
                        type: ADD_TODO_SUCCESS,
                        error: err,
                    });
                }
            );
    }
}
