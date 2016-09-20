# Angular2-Redux

### Store to local storage

    const persistState = require('redux-localstorage');

    export const enhancers = [
        // add your redux enhancers here
        persistState()
    ];
