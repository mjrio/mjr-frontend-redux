import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class CounterActions {
    static INCREMENT_COUNTER: string = 'INCREMENT_COUNTER';
    static DECREMENT_COUNTER: string = 'DECREMENT_COUNTER';
    static RANDOMIZE_COUNTER: string = 'RANDOMIZE_COUNTER';

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    increment(): void {
        this.ngRedux.dispatch({ type: CounterActions.INCREMENT_COUNTER });
    }
}
