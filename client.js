import {Terminal} from 'xterm'
import {AttachAddon} from 'xterm-addon-attach'
import 'xterm/css/xterm.css'

{
  const term = new Terminal({convertEol: true})
  const wsServer = new WebSocket('ws://localhost:8080')
  const attachAddon = new AttachAddon(wsServer)
  term.loadAddon(attachAddon)
  term.open(document.querySelector('#terminal'))
}

{
  const term = new Terminal({convertEol: true})
  const wsServer = new WebSocket('ws://localhost:8080/global')
  const attachAddon = new AttachAddon(wsServer)
  term.loadAddon(attachAddon)
  term.open(document.querySelector('#terminal-global'))
}
