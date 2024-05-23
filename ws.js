var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 8080})

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('Connection Status: %s', message)
  })

  setInterval(
    () => ws.send("Hello World"),
    1000
  )
})
