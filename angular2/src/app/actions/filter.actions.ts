export const SHOW_ALL_TODOS = 'SHOW_ALL_TODOS';
export const SHOW_ACTIVE_TODOS = 'SHOW_ACTIVE_TODOS';
export const SHOW_COMPLETED_TODOS = 'SHOW_COMPLETED_TODOS';
export const REMOVE_COMPLETED_TODOS = 'REMOVE_COMPLETED_TODOS';

export const showAllTodos = () => ({
    type: SHOW_ALL_TODOS
});

export const showActiveTodos = () => ({
    type: SHOW_ACTIVE_TODOS,
});

export const showCompletedTodos = () => ({
    type: SHOW_COMPLETED_TODOS,
});

export const clearCompletedTodos = () => ({
    type: REMOVE_COMPLETED_TODOS,
});
