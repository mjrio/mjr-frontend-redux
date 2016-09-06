export const SHOW_ALL_TODOS = 'SHOW_ALL_TODOS'
export const SHOW_COMPLETED_TODOS = 'SHOW_COMPLETED_TODOS'
export const SHOW_ACTIVE_TODOS = 'SHOW_ACTIVE_TODOS'

const showAll = (item) => true;
const showCompleted = (item) => item.completed;
const showActive = (item) => !item.completed;

const INITIAL_STATE = {
    predicate: showAll,
    key: SHOW_ALL_TODOS,
};

export const filterReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case SHOW_ALL_TODOS:
            return Object.assign({},{predicate: showAll, key: action.type});
        case SHOW_COMPLETED_TODOS:
            return Object.assign({},{predicate: showCompleted, key: action.type});;
        case SHOW_ACTIVE_TODOS:
            return Object.assign({},{predicate: showActive, key: action.type});;
        default:
            return state;
    }
};

