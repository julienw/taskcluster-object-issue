1. Clone the project
2. Run npm i
3. Run npm test

The error is:
```
FAIL  ./taskcluster-client.test.js
● Test suite failed to run

ReferenceError: Cannot access 'Object' before initialization

> 1 | import { Queue } from "taskcluster-client-web";
| ^
2 |

  at Object.<anonymous> (node_modules/taskcluster-client-web/src/clients/Object.js:3:1)
  at Object.require (node_modules/taskcluster-client-web/src/index.js:19:1)
at Object.require (taskcluster-client.test.js:1:1)
```

The problem is that babel adds a preample to the Object file:
```js
Object.defineProperty(exports, "__esModule", {
  value: true
});
```

as you can see yourself by running:
```
node_modules/.bin/babel node_modules/taskcluster-client-web/src/clients/Object.js
```

But the same file defines a class named `Object`.

The fix would be to rename the class named `Object` to something else, so that
it doesn't shadow the JavaScript standard `Object` class.

Note that Babel is necessary when running with Jest in CommonJS mode because
taskcluster-client-web is published with ES modules.
