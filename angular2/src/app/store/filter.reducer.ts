export const SHOW_ALL_TODOS = 'SHOW_ALL_TODOS';
export const SHOW_COMPLETED_TODOS = 'SHOW_COMPLETED_TODOS';
export const SHOW_ACTIVE_TODOS = 'SHOW_ACTIVE_TODOS';

const INITIAL_STATE = {
    key: SHOW_ALL_TODOS,
};

export const filterTodos = (todos, filter) => {
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
        case SHOW_COMPLETED_TODOS:
            return Object.assign({}, { key: action.type});
        case SHOW_ACTIVE_TODOS:
            return Object.assign({}, { key: action.type});
        default:
            return state;
    }
};

