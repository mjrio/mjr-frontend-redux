import {
    SHOW_ALL_TODOS,
    SHOW_COMPLETED_TODOS,
    SHOW_ACTIVE_TODOS,
} from '../actions/filter.actions';

const INITIAL_STATE = {
    key: SHOW_ALL_TODOS,
};

// This is a selector (filter on the state)
// See re-select library for more advanced selector
export const filterTodosSelector = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL_TODOS:
            return todos;
        case SHOW_COMPLETED_TODOS:
            return todos.filter(item => item.completed);
        case SHOW_ACTIVE_TODOS:
            return todos.filter(item => !item.completed);
    }
};

export const filterReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case SHOW_ALL_TODOS:
            return Object.assign({}, {key: action.type});
            // typescript 2.1 or ES7:
            // return {
            //   ... state,
            //   key: action.type
            // }
        case SHOW_COMPLETED_TODOS:
            return Object.assign({}, { key: action.type});
        case SHOW_ACTIVE_TODOS:
            return Object.assign({}, { key: action.type});
        default:
            return state;
    }
};

