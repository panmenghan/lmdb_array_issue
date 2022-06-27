## SETUP
```bash
npm i

# start server
npm dev:server

# start client
npm dev:client
```

## ISSUE
When `repl.start` ([server.js](./server.js)) options with `useGlobal = false`,
if use with `lmdb`, and the key or the value contains array,
the array will be treated like object.

```js
db.get([1]) // -> Uncaught Error: Unable to serialize object as a key

db.put(1, [1])
db.get(1) // -> {'0': 1}
```
