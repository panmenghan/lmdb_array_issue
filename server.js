const {open} = require('lmdb')
const db = open({path: 'dist/db'})
globalThis.db = db

const {createWebSocketStream, WebSocketServer} = require('ws')
const wss = new WebSocketServer({port: 8080}, () => {
  console.log('server started: http://localhost:8080')
})

const repl = require('repl')
wss.on('connection', (wsClient, req) => {
  let useGlobal = undefined // Default: `false`.
  if (req.url === '/global') {
    useGlobal = true
  }
  console.log('client:', req.url, req.socket.address())
  const stream = createWebSocketStream(wsClient)
  repl.start({
    input: stream,
    output: stream,
    terminal: true,
    useColors: true,
    preview: false,
    useGlobal,
  })
})
