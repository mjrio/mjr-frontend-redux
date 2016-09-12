# Agenda

Intro: 10min
- Flux (mvc vs flux: https://iweave.com/blog.html)
- Basic principles (single truth, read only, pure functions)
- Flow

POJ example: 30min
- inc/dec counter (https://github.com/reactjs/redux/tree/master/examples/counter-vanilla)

Angular TODO: 20 min
- todo app (http://redux.js.org/docs/basics/ExampleTodoList.html)
- connect
- devTools

Implementations (optional: 5min)
- react - redux
- ng2-redux
- @ngrx/store
- https://github.com/xgrommx/awesome-redux

# Presentatie
Installatie:

    cd slides/
    npm i

Start:

    npm start


# Issues

## angular-cli for Windows

    npm uninstall -g angular-cli
    npm cache clean
    npm install -g node-gyp
    npm install --global --production windows-build-tools => installs Python and visual studio visual C++ build tools). Be patient. This installation takes about 15 minutes. Further information: https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules
    npm install -g node-pre-gyp
    npm install -g chokidar (recommended for all Windows users to "simulate" fs-events-functions) => File system watching events (fs-events) is a module for OS Apple Macintosh. It’s not possible to install it on a windows operating system. The alternative for windows is chokidar. It will take the position of watching for file system events on Windows (Macintosh uses fs-events module for this). Ignore errors and warnings during installation. Further information: nodejs/node#7858
    npm install -g angular-cli@webpack
